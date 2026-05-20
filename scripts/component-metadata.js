const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COMPONENTS = path.join(ROOT, 'data', 'components.json');
const META_DIR = path.join(ROOT, 'data', 'meta');
const CHANGELOG_FILE = path.join(ROOT, 'CHANGELOG_COMPONENTS.md');
const SEMVER_RE = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-.]+))?(?:\+([0-9A-Za-z-.]+))?$/;

function readJson(file){
  try{ return JSON.parse(fs.readFileSync(file, 'utf8')); }catch(e){ return null; }
}

function writeJson(file, data){
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}

function semverBump(version, level){
  const parts = version.split('.').map(n=>parseInt(n,10)||0);
  if(level === 'major'){ parts[0] +=1; parts[1]=0; parts[2]=0; }
  else if(level === 'minor'){ parts[1] +=1; parts[2]=0; }
  else { parts[2] +=1; }
  return parts.join('.');
}

function isSemver(version){
  return SEMVER_RE.test(String(version || '').trim());
}

function today(){ return new Date().toISOString().split('T')[0]; }

function ensureMeta(component){
  const id = component.id || path.basename(component.path || component.title || 'component', '.html');
  const metaPath = path.join(META_DIR, `${id}.json`);
  let meta = readJson(metaPath);
  if(!meta){
    meta = {
      id,
      title: component.title || id,
      path: component.path || component.file || '',
      dependencies: buildDependencies(id, component.path || component.file || ''),
      version: '0.1.0',
      changelog: [ { version: '0.1.0', date: today(), note: 'Initial metadata generated' } ]
    };
    writeJson(metaPath, meta);
    console.log(`Created metadata: data/meta/${id}.json`);
  } else {
    // normalize fields
    meta.title = meta.title || component.title || id;
    meta.path = component.path || component.file || meta.path || '';
    writeJson(metaPath, meta);
  }
  return { id, metaPath, meta };
}

function componentList(){
  const list = readJson(COMPONENTS);
  return Array.isArray(list) ? list : [];
}

function componentIds(){
  return componentList().map((component) => (
    component.id || path.basename(component.path || component.title || 'component', '.html')
  ));
}

function readComponentMetasById(ids){
  return ids
    .map((id) => readJson(path.join(META_DIR, `${id}.json`)))
    .filter(Boolean);
}

function generateAll(){
  const list = componentList();
  fs.mkdirSync(META_DIR, { recursive: true });
  const results = [];
  for(const c of list){
    results.push(ensureMeta(c));
  }
  // generate combined changelog markdown
  const metas = readComponentMetasById(componentIds());
  generateChangelog(metas);
  console.log(`\n✅ Component metadata generation complete (${results.length} components).`);
}

function generateChangelog(metas){
  const safeMetas = (metas || []).filter(Boolean);
  safeMetas.sort((a,b)=> String(a.id || '').localeCompare(String(b.id || '')));
  let md = '# Component Changelog\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  for(const m of safeMetas){
    md += `## ${m.title} — ${m.id}\n\n`;
    md += `Path: ${m.path || '-'}\n\n`;
    md += `Current version: **${m.version}**\n\n`;
    md += `Changelog:\n\n`;
    for(const entry of (m.changelog || [])){
      md += `- ${entry.date} — ${entry.version} — ${entry.note || ''}\n`;
    }
    md += '\n';
  }
  fs.writeFileSync(CHANGELOG_FILE, md);
  console.log(`Wrote ${CHANGELOG_FILE}`);
}

function bump(componentId, level, note){
  if(!['patch', 'minor', 'major'].includes(level)){
    console.error("Bump level must be one of: patch, minor, major");
    process.exit(2);
  }
  const metaPath = path.join(META_DIR, `${componentId}.json`);
  const meta = readJson(metaPath);
  if(!meta){ console.error(`Metadata for '${componentId}' not found.`); process.exit(2); }
  const old = meta.version || '0.0.0';
  if(!isSemver(old)){
    console.error(`Current version '${old}' is not valid semver.`);
    process.exit(2);
  }
  const next = semverBump(old, level);
  meta.version = next;
  meta.changelog = meta.changelog || [];
  meta.changelog.unshift({ version: next, date: today(), note: note || `Bumped ${level}` });
  writeJson(metaPath, meta);
  console.log(`Bumped ${componentId}: ${old} -> ${next}`);
  generateChangelog(readComponentMetasById(componentIds()));
}

function check(){
  const list = componentList();
  if(!list.length){
    console.error(`Invalid components source: ${COMPONENTS}`);
    process.exit(2);
  }

  const errors = [];
  let checked = 0;

  for(const component of list){
    const id = component.id || path.basename(component.path || component.title || 'component', '.html');
    const metaPath = path.join(META_DIR, `${id}.json`);
    const meta = readJson(metaPath);
    checked += 1;

    if(!meta){
      errors.push(`[${id}] Missing metadata file: data/meta/${id}.json`);
      continue;
    }

    if(!isSemver(meta.version)){
      errors.push(`[${id}] Invalid current version '${meta.version}'.`);
    }

    if(!Array.isArray(meta.changelog) || meta.changelog.length === 0){
      errors.push(`[${id}] Missing changelog entries.`);
    } else {
      if(!meta.changelog.some((entry) => entry && entry.version === meta.version)){
        errors.push(`[${id}] Current version '${meta.version}' is not present in changelog.`);
      }

      meta.changelog.forEach((entry, index) => {
        if(!entry || !isSemver(entry.version)){
          errors.push(`[${id}] Changelog entry #${index + 1} has invalid version.`);
        }
        if(!entry || !/^\d{4}-\d{2}-\d{2}$/.test(String(entry.date || ''))){
          errors.push(`[${id}] Changelog entry #${index + 1} has invalid date.`);
        }
      });
    }

    const expectedPath = component.path || component.file || '';
    const recordedPath = meta.path || expectedPath;
    if(expectedPath && recordedPath !== expectedPath){
      errors.push(`[${id}] Metadata path '${recordedPath}' does not match components path '${expectedPath}'.`);
    }

    if(recordedPath && !fs.existsSync(path.join(ROOT, recordedPath))){
      errors.push(`[${id}] Component page does not exist at '${recordedPath}'.`);
    }
  }

  if(errors.length){
    console.error(`\n❌ Component metadata check failed (${errors.length} issue(s)).`);
    errors.forEach((message) => console.error(`- ${message}`));
    process.exit(1);
  }

  console.log(`\n✅ Component metadata check passed (${checked} components).`);
}

function parseArgs(argv){
  const parsed = { _: [] };
  for(let i = 0; i < argv.length; i += 1){
    const token = argv[i];
    if(!token.startsWith('--')){
      parsed._.push(token);
      continue;
    }

    const inlineSplit = token.indexOf('=');
    if(inlineSplit !== -1){
      const key = token.slice(2, inlineSplit);
      parsed[key] = token.slice(inlineSplit + 1);
      continue;
    }

    const key = token.slice(2);
    const next = argv[i + 1];
    if(next && !next.startsWith('--')){
      parsed[key] = next;
      i += 1;
    } else {
      parsed[key] = true;
    }
  }
  return parsed;
}

// CLI
const argv = parseArgs(process.argv.slice(2));
if(argv.generate || argv._.includes('generate')){
  generateAll();
  process.exit(0);
}
if(argv.check || argv._.includes('check')){
  check();
  process.exit(0);
}
if(argv.bump){
  const [componentId, level] = String(argv.bump).split(':');
  if(!componentId || !level) { console.error('Usage: --bump=id:patch|minor|major [--note="text"]'); process.exit(2); }
  bump(componentId, level, argv.note);
  process.exit(0);
}

// default: generate
generateAll();
