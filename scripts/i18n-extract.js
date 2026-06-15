const fs = require('fs');
const path = require('path');

const DEFAULT_ROOTS = ['src', 'components/WebComponents'];
const DEFAULT_OUTPUT = path.join('locales', 'extracted-keys.json');
const SOURCE_EXTENSIONS = new Set(['.js', '.mjs', '.cjs', '.ts', '.html']);

const TRANSLATION_CALL_RE = /(?:\bI18n\.)?\bt\(\s*['"]([a-zA-Z0-9_.:-]+)['"]\s*(?:,|\))/g;
const DATA_I18N_RE = /data-i18n\s*=\s*['"]([^'"]+)['"]/g;

function walk(dir, files = []) {
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) walk(full, files);
    else files.push(full);
  });
  return files;
}

function extractFromFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const keys = new Set();
  let m;
  while ((m = DATA_I18N_RE.exec(content))) keys.add(m[1]);
  while ((m = TRANSLATION_CALL_RE.exec(content))) keys.add(m[1]);
  return Array.from(keys);
}

function collectTranslationKeys(rootDirs = DEFAULT_ROOTS) {
  const keys = new Set();
  rootDirs.forEach((rootDir) => {
    if (!fs.existsSync(rootDir)) return;
    const files = walk(rootDir).filter((file) => SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase()));
    files.forEach((f) => {
      extractFromFile(f).forEach((k) => keys.add(k));
    });
  });
  return Array.from(keys).sort();
}

function writeExtractedKeys(outputFile, keys) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(keys, null, 2));
}

function main() {
  const keys = collectTranslationKeys();
  const out = DEFAULT_OUTPUT;
  writeExtractedKeys(out, keys);
  console.log('Extracted', keys.length, 'keys to', out);
}

if (require.main === module) main();

module.exports = {
  DEFAULT_ROOTS,
  DEFAULT_OUTPUT,
  collectTranslationKeys,
  extractFromFile,
  writeExtractedKeys,
  walk
};
