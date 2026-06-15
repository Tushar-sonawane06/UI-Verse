#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { generateRegistry } = require('./generate-component-registry');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'data');
const componentsFile = path.join(dataDir, 'components.json');
const metaDir = path.join(dataDir, 'meta');

const argv = process.argv.slice(2);
const checkOnly = argv.includes('--check');

function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n');
}

function normalizeComponent(c) {
  const out = Object.assign({}, c);
  if (typeof out.id === 'string') out.id = out.id.trim().toLowerCase();
  if (typeof out.title === 'string') out.title = out.title.trim();
  if (typeof out.path === 'string') out.path = out.path.replace(/^\.\//, '').trim();
  if (out.tags && Array.isArray(out.tags)) {
    out.tags = Array.from(new Set(out.tags.map(t => (typeof t === 'string' ? t.trim() : t))));
  }
  if (out.aliases && Array.isArray(out.aliases)) {
    out.aliases = Array.from(new Set(out.aliases.map(a => (typeof a === 'string' ? a.trim() : a))));
  }
  if (out.category && typeof out.category === 'string') {
    out.category = out.category.trim();
  }
  if (out.description && typeof out.description === 'string') out.description = out.description.trim();
  return out;
}

function ensureMetaFor(component) {
  const metaFile = path.join(metaDir, `${component.id}.json`);
  if (!fs.existsSync(metaDir)) fs.mkdirSync(metaDir, { recursive: true });
  if (!fs.existsSync(metaFile)) {
    const stub = {
      id: component.id,
      title: component.title || component.id,
      path: component.path || component.id + '.html',
      version: '0.0.0',
      changelog: [
        { version: '0.0.0', date: new Date().toISOString().split('T')[0], note: 'Initial stub metadata' }
      ]
    };
    writeJson(metaFile, stub);
    return { updated: true, file: metaFile };
  }
  const meta = loadJson(metaFile);
  let changed = false;
  if (meta.id !== component.id) { meta.id = component.id; changed = true; }
  if (!meta.title && component.title) { meta.title = component.title; changed = true; }
  if (!meta.path && component.path) { meta.path = component.path; changed = true; }
  if (changed) writeJson(metaFile, meta);
  return { updated: changed, file: metaFile };
}

function main() {
  if (!fs.existsSync(componentsFile)) {
    console.error('components.json not found at', componentsFile);
    process.exit(2);
  }
  const components = loadJson(componentsFile);
  const normalized = components.map(normalizeComponent);
  normalized.sort((a,b) => String(a.id).localeCompare(String(b.id)));

  const current = JSON.stringify(components, null, 2);
  const next = JSON.stringify(normalized, null, 2);

  if (current !== next) {
    if (checkOnly) {
      console.error('components.json is not normalized. Run the normalize script to apply changes.');
      process.exit(1);
    }
    writeJson(componentsFile, normalized);
    console.log('Normalized data/components.json');
  } else {
    console.log('data/components.json already normalized');
  }

  let anyMetaUpdated = false;
  normalized.forEach(c => {
    const res = ensureMetaFor(c);
    if (res.updated) {
      anyMetaUpdated = true;
      console.log('Created/updated meta file:', res.file);
    }
    const assetPath = path.join(root, c.path || '');
    if (c.path && !fs.existsSync(assetPath)) {
      console.warn(`Warning: component path not found for ${c.id}: ${c.path}`);
    }
  });

  if (anyMetaUpdated) {
    if (checkOnly) process.exit(1);
    console.log('Meta files ensured/updated');
  }

  const registryResult = generateRegistry({ rootDir: root, write: !checkOnly });
  const registryFile = path.join(dataDir, 'registry.json');
  if (checkOnly) {
    const expected = `${JSON.stringify({ version: registryResult.version, registry: registryResult.registry }, null, 2)}\n`;
    const actual = fs.existsSync(registryFile) ? fs.readFileSync(registryFile, 'utf8') : '';
    if (actual !== expected) {
      console.error('data/registry.json is out of date. Run npm run components:registry:generate.');
      process.exit(1);
    }
  } else {
    console.log('Generated data/registry.json');
  }

  console.log('Done.');
}

if (require.main === module) main();
