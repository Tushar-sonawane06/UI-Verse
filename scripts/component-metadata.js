const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COMPONENTS = path.join(ROOT, 'data', 'components.json');
const META_DIR = path.join(ROOT, 'data', 'meta');
const CHANGELOG_FILE = path.join(ROOT, 'CHANGELOG_COMPONENTS.md');

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
      version: '0.1.0',
      changelog: [ { version: '0.1.0', date: today(), note: 'Initial metadata generated' } ]
    };
    writeJson(metaPath, meta);
    console.log(`Created metadata: data/meta/${id}.json`);
  } else {
    // normalize fields
    meta.title = meta.title || component.title || id;
    meta.path = meta.path || component.path || meta.path || '';
    writeJson(metaPath, meta);
  }
  return { id, metaPath, meta };
}

function generateAll(){
  const list = readJson(COMPONENTS) || [];
  fs.mkdirSync(META_DIR, { recursive: true });
  const results = [];
  for(const c of list){
    results.push(ensureMeta(c));
  }
  // generate combined changelog markdown
  const metas = fs.readdirSync(META_DIR).filter(f=>f.endsWith('.json')).map(f=>readJson(path.join(META_DIR,f)));
  generateChangelog(metas);
  console.log(`\n✅ Component metadata generation complete (${results.length} components).`);
}

function generateChangelog(metas){
  metas.sort((a,b)=> a.id.localeCompare(b.id));
  let md = '# Component Changelog\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  for(const m of metas){
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
  const metaPath = path.join(META_DIR, `${componentId}.json`);
  const meta = readJson(metaPath);
  if(!meta){ console.error(`Metadata for '${componentId}' not found.`); process.exit(2); }
  const old = meta.version || '0.0.0';
  const next = semverBump(old, level);
  meta.version = next;
  meta.changelog = meta.changelog || [];
  meta.changelog.unshift({ version: next, date: today(), note: note || `Bumped ${level}` });
  writeJson(metaPath, meta);
  console.log(`Bumped ${componentId}: ${old} -> ${next}`);
  generateChangelog([meta].concat(fs.readdirSync(META_DIR).filter(f=>f.endsWith('.json') && f !== `${componentId}.json`).map(f=>readJson(path.join(META_DIR,f)))));
}

// CLI
const argv = require('minimist')(process.argv.slice(2));
if(argv.generate || argv._.includes('generate')){
  generateAll();
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
