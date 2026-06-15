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

function buildDependencies(componentId, componentPath){
  const id = String(componentId || path.basename(componentPath || 'component', '.html')).toLowerCase();
  const localStyle = id === 'index' ? 'home.css' : (id === 'color' ? 'colors.css' : `${id}.css`);

  if (id === 'index') {
    return {
      styles: ['style.css', 'home.css'],
      scripts: ['script.js', 'js/features/theme.js', 'js/features/search.js', 'js/features/command-palette.js', 'js/features/accessibility.js']
    };
  }

  if (id === 'settings') {
    return {
      styles: ['style.css', 'css/main.css'],
      scripts: ['script.js', 'js/features/theme.js', 'js/features/sidebar.js', 'js/features/search.js', 'js/features/code-tools.js', 'js/features/sandbox.js', 'js/features/accessibility.js', 'js/features/toast.js', 'js/features/popup.js']
    };
  }

  return {
    styles: ['style.css', 'css/main.css', localStyle],
    scripts: ['script.js', 'js/features/theme.js', 'js/features/accessibility.js', 'js/features/code-tools.js', 'js/features/sandbox.js']
  };
}

function today(){ return new Date().toISOString().split('T')[0]; }

function normalizeChangelogText(text) {
  return String(text || '')
    .replace(/^Generated: .*$/m, 'Generated: <normalized>')
    .trim();
}

function getPaths(rootDir = ROOT) {
  const resolvedRoot = rootDir || ROOT;
  return {
    rootDir: resolvedRoot,
    componentsFile: path.join(resolvedRoot, 'data', 'components.json'),
    metaDir: path.join(resolvedRoot, 'data', 'meta'),
    changelogFile: path.join(resolvedRoot, 'CHANGELOG_COMPONENTS.md')
  };
}

function buildDependencies(id, filePath) {
  // Placeholder — can be enhanced later to parse actual imports
  return [];
}

function ensureMeta(component, options = {}){
  const paths = getPaths(options.rootDir);
  const id = component.id || path.basename(component.path || component.title || 'component', '.html');
  const metaPath = path.join(paths.metaDir, `${id}.json`);
  let meta = readJson(metaPath);
  if(!meta){
    meta = {
      id,
      title: component.title || id,
      path: component.path || component.file || '',
      dependencies: buildDependencies(id, component.path || component.file || ''),
      version: '0.1.0',
      changelog: [ { version: '0.1.0', date: today(), note: 'Initial metadata generated', changeType: 'structure', contributor: 'system' } ]
    };
    writeJson(metaPath, meta);
  } else {
    // normalize fields
    meta.title = meta.title || component.title || id;
    meta.path = component.path || component.file || meta.path || '';
    // Normalize changelog entries to have changeType and contributor
    if (Array.isArray(meta.changelog)) {
      meta.changelog = meta.changelog.map((entry, i) => ({
        version: entry.version,
        date: entry.date,
        note: entry.note || '',
        changeType: entry.changeType || 'structure',
        contributor: entry.contributor || 'unknown'
      }));
    }
    writeJson(metaPath, meta);
  }
  return { id, metaPath, meta };
}

function componentList(options = {}){
  const paths = getPaths(options.rootDir);
  const list = readJson(paths.componentsFile);
  return Array.isArray(list) ? list : [];
}

function componentIds(options = {}){
  return componentList(options).map((component) => (
    component.id || path.basename(component.path || component.title || 'component', '.html')
  ));
}

function readComponentMetasById(ids, options = {}){
  const paths = getPaths(options.rootDir);
  return ids
    .map((id) => readJson(path.join(paths.metaDir, `${id}.json`)))
    .filter(Boolean);
}

function generateAll(options = {}){
  const paths = getPaths(options.rootDir);
  const list = componentList({ rootDir: paths.rootDir });
  fs.mkdirSync(paths.metaDir, { recursive: true });
  const results = [];
  for(const c of list){
    results.push(ensureMeta(c, { rootDir: paths.rootDir }));
  }
  // generate combined changelog markdown
  const metas = readComponentMetasById(componentIds({ rootDir: paths.rootDir }), { rootDir: paths.rootDir });
  const changelog = generateChangelog(metas, { rootDir: paths.rootDir });
  if(options.write !== false){
    fs.writeFileSync(paths.changelogFile, changelog);
  }
  return {
    results,
    changelog
  };
}

function generateChangelog(metas, options = {}){
  const safeMetas = (metas || []).filter(Boolean);
  safeMetas.sort((a,b)=> String(a.id || '').localeCompare(String(b.id || '')));
  let md = '# Component Changelog\n\n';
  md += `Generated: ${options.generatedAt || new Date().toISOString()}\n\n`;
  for(const m of safeMetas){
    md += `## ${m.title} — ${m.id}\n\n`;
    md += `Path: ${m.path || '-'}\n\n`;
    md += `Current version: **${m.version}**\n\n`;
    md += `Changelog:\n\n`;
    for(const entry of (m.changelog || [])){
      const typeTag = entry.changeType ? `[${entry.changeType}]` : '';
      const contrib = entry.contributor ? `(@${entry.contributor})` : '';
      md += `- ${entry.date} — ${entry.version} ${typeTag} ${contrib} — ${entry.note || ''}\n`;
    }
    md += '\n';
  }
  return md;
}

function buildVersioningState(options = {}){
  const paths = getPaths(options.rootDir);
  const list = componentList({ rootDir: paths.rootDir });
  const errors = [];
  const warnings = [];
  const metas = [];

  if(!list.length){
    errors.push(`Invalid components source: ${paths.componentsFile}`);
    return { ok: false, errors, warnings, list, metas, changelog: '', expectedChangelog: '', paths };
  }

  for(const component of list){
    const id = component.id || path.basename(component.path || component.title || 'component', '.html');
    const metaPath = path.join(paths.metaDir, `${id}.json`);
    const meta = readJson(metaPath);

    if(!meta){
      errors.push(`[${id}] Missing metadata file: data/meta/${id}.json`);
      continue;
    }

    metas.push(meta);

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
        const parsedDate = Date.parse(String(entry.date || ''));
        if(!entry || (isNaN(parsedDate) && !/^\d{4}-\d{2}-\d{2}$/.test(String(entry.date || '')))){
          errors.push(`[${id}] Changelog entry #${index + 1} has invalid date.`);
        }
      });
    }

    const expectedPath = component.path || component.file || '';
    const recordedPath = meta.path || expectedPath;
    if(expectedPath && recordedPath !== expectedPath){
      errors.push(`[${id}] Metadata path '${recordedPath}' does not match components path '${expectedPath}'.`);
    }

    if(recordedPath && !fs.existsSync(path.join(paths.rootDir, recordedPath))){
      errors.push(`[${id}] Component page does not exist at '${recordedPath}'.`);
    }
  }

  const expectedChangelog = generateChangelog(readComponentMetasById(componentIds({ rootDir: paths.rootDir }), { rootDir: paths.rootDir }), { rootDir: paths.rootDir, generatedAt: 'normalized' });
  const changelogFile = fs.existsSync(paths.changelogFile) ? fs.readFileSync(paths.changelogFile, 'utf8') : '';
  if(!changelogFile){
    errors.push(`Missing changelog file: ${paths.changelogFile}`);
  } else if(normalizeChangelogText(changelogFile) !== normalizeChangelogText(expectedChangelog)){
    errors.push('CHANGELOG_COMPONENTS.md is out of date. Regenerate it with npm run components:version:generate.');
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    list,
    metas,
    changelog: changelogFile,
    expectedChangelog,
    paths
  };
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
  const state = buildVersioningState({ rootDir: ROOT });

  if(!state.ok){
    console.error(`\n❌ Component metadata check failed (${state.errors.length} issue(s)).`);
    state.errors.forEach((message) => console.error(`- ${message}`));
    process.exit(1);
  }

  console.log(`\n✅ Component metadata check passed (${state.list.length} components).`);
  console.log(`- Changelog: in sync`);
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

function runCli(argv = process.argv.slice(2)) {
  const parsed = parseArgs(argv);

  if(parsed.generate || parsed._.includes('generate')){
    const result = generateAll();
    const paths = getPaths(ROOT);
    generateVersionCatalog({ rootDir: ROOT });
    console.log(`Wrote ${paths.changelogFile}`);
    console.log(`\n✅ Component metadata generation complete (${result.results.length} components).`);
    return 0;
  }

  if(parsed.check || parsed._.includes('check')){
    check();
    return 0;
  }

  if(parsed.bump){
    const [componentId, level] = String(parsed.bump).split(':');
    if(!componentId || !level) { console.error('Usage: --bump=id:patch|minor|major [--note="text"]'); return 2; }
    bump(componentId, level, parsed.note);
    return 0;
  }

  const result = generateAll();
  const paths = getPaths(ROOT);
  console.log(`Wrote ${paths.changelogFile}`);
  console.log(`\n✅ Component metadata generation complete (${result.results.length} components).`);
  return 0;
}

function generateVersionCatalog(options = {}){
  const paths = getPaths(options.rootDir);
  const ids = componentIds({ rootDir: paths.rootDir });
  const metas = readComponentMetasById(ids, { rootDir: paths.rootDir });
  const catalog = metas.map((meta) => ({
    id: meta.id,
    title: meta.title,
    path: meta.path,
    version: meta.version,
    changelog: (meta.changelog || []).map((entry) => ({
      version: entry.version,
      date: entry.date,
      note: entry.note,
      changeType: entry.changeType || 'structure',
      contributor: entry.contributor || 'unknown'
    }))
  }));

  const catalogPath = path.join(paths.rootDir, 'data', 'component-versions.json');
  writeJson(catalogPath, catalog);
  console.log(`Wrote ${catalogPath}`);
  return catalog;
}

if(require.main === module){
  process.exitCode = runCli();
}

module.exports = {
  readJson,
  writeJson,
  semverBump,
  isSemver,
  getPaths,
  ensureMeta,
  componentList,
  componentIds,
  readComponentMetasById,
  generateAll,
  generateChangelog,
  generateVersionCatalog,
  buildVersioningState,
  bump,
  check,
  normalizeChangelogText,
  runCli
};
