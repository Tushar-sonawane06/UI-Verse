/**
 * UIverse - Semantic Version Manager
 * Handles version bumping and changelog generation
 * 
 * Usage: node scripts/version-manager.js [major|minor|patch]
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PACKAGE_JSON = path.join(PROJECT_ROOT, 'package.json');

function getCurrentVersion() {
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf8'));
  return pkg.version;
}

function bumpVersion(current, type) {
  const [major, minor, patch] = current.split('.').map(Number);
  
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

function updatePackageVersion(newVersion) {
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf8'));
  pkg.version = newVersion;
  fs.writeFileSync(PACKAGE_JSON, JSON.stringify(pkg, null, 2));
}

function generateChangelog(commits) {
  let changelog = '# Changelog\n\n';
  
  const features = commits.filter(c => c.type === 'feat');
  const fixes = commits.filter(c => c.type === 'fix');
  const breaking = commits.filter(c => c.breaking);
  
  if (features.length) {
    changelog += '## Features\n';
    features.forEach(f => changelog += `- ${f.message} (${f.hash})\n`);
    changelog += '\n';
  }
  
  if (fixes.length) {
    changelog += '## Bug Fixes\n';
    fixes.forEach(f => changelog += `- ${f.message} (${f.hash})\n`);
    changelog += '\n';
  }
  
  if (breaking.length) {
    changelog += '## Breaking Changes\n';
    breaking.forEach(b => changelog += `- ${b.message} (${b.hash})\n`);
    changelog += '\n';
  }
  
  return changelog;
}

function main() {
  const type = process.argv[2] || 'patch';
  const current = getCurrentVersion();
  const newVersion = bumpVersion(current, type);
  
  console.log(`Current version: ${current}`);
  console.log(`New version: ${newVersion}`);
  
  updatePackageVersion(newVersion);
  
  console.log(`\nUpdated package.json to version ${newVersion}`);
  console.log('Run "npm run release" to publish (requires semantic-release setup)');
}

main();