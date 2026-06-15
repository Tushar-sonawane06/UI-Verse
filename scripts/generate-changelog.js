#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'data');
const metaDir = path.join(dataDir, 'meta');
const componentsFile = path.join(dataDir, 'components.json');

const argv = process.argv.slice(2);
const checkOnly = argv.includes('--check');

function loadJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function writeJson(file, obj) { fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n'); }

function gitLogForPath(pathSpec) {
  try {
    const out = execSync(`git log --pretty=format:%ad||%s --date=short -- ${pathSpec}`, { cwd: root, stdio: ['ignore','pipe','pipe'] }).toString('utf8').trim();
    if (!out) return [];
    return out.split('\n').map(l => {
      const idx = l.indexOf('||');
      return { date: l.slice(0, idx), message: l.slice(idx+2) };
    });
  } catch (e) {
    return [];
  }
}

function bumpVersion(version) {
  const parts = String(version || '0.0.0').split('.').map(n => parseInt(n,10)||0);
  parts[2] = (parts[2] || 0) + 1;
  return parts.join('.');
}

function main() {
  if (!fs.existsSync(componentsFile)) {
    console.error('components.json missing'); process.exit(2);
  }
  const components = loadJson(componentsFile);
  if (!fs.existsSync(metaDir)) {
    console.error('meta directory missing:', metaDir); process.exit(2);
  }

  let anyChanges = false;

  components.forEach(c => {
    const metaFile = path.join(metaDir, `${c.id}.json`);
    if (!fs.existsSync(metaFile)) return;
    const meta = loadJson(metaFile);
    const sinceDate = (meta.changelog && meta.changelog.length) ? meta.changelog[0].date : null;
    const commits = gitLogForPath(c.path || c.id + '.html');
    // keep commits that are newer than latest recorded date
    const newCommits = sinceDate ? commits.filter(cm => cm.date > sinceDate) : commits;
    if (newCommits.length === 0) return;

    // create a changelog entry summarizing commits
    const newest = newCommits[0];
    const newVersion = bumpVersion(meta.version || '0.0.0');
    const note = newCommits.map(nc => `- ${nc.date}: ${nc.message}`).join('\n');

    const entry = { version: newVersion, date: newest.date, note: `Changes:\n${note}` };

    // prepend to changelog
    meta.changelog = meta.changelog || [];
    meta.changelog.unshift(entry);
    meta.version = newVersion;

    if (checkOnly) {
      console.log(`Would update changelog for ${c.id}: add ${newVersion} (${newCommits.length} commits)`);
      anyChanges = true;
    } else {
      writeJson(metaFile, meta);
      console.log(`Updated changelog for ${c.id}: ${newVersion} (${newCommits.length} commits)`);
      anyChanges = true;
    }
  });

  if (anyChanges && checkOnly) process.exit(1);
  if (!anyChanges) console.log('No changelog updates found.');
}

if (require.main === module) main();
