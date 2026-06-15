const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { test } = require('node:test');

const { collectTranslationKeys } = require('../../scripts/i18n-extract.js');
const { validateLocales } = require('../../scripts/i18n-validate.js');
const { syncLocales } = require('../../scripts/i18n-sync.js');

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function makeFixtureRoot() {
  const rootDir = fs.mkdtempSync(path.join(os.tmpdir(), 'uiverse-i18n-'));
  writeFile(path.join(rootDir, 'components', 'WebComponents', 'uv-language-switcher.js'), `
    export function demo() {
      return window.I18n.t('language_label');
    }
  `);
  writeFile(path.join(rootDir, 'src', 'pages', 'home.html'), `
    <div data-i18n="uv.welcome"></div>
  `);
  writeFile(path.join(rootDir, 'src', 'locales', 'en.json'), JSON.stringify({
    language_label: 'Language',
    'uv.welcome': 'Welcome'
  }, null, 2));
  writeFile(path.join(rootDir, 'src', 'locales', 'es.json'), JSON.stringify({
    language_label: 'Idioma',
    'uv.welcome': 'Bienvenido'
  }, null, 2));
  writeFile(path.join(rootDir, 'dist', 'locales', 'en.json'), JSON.stringify({
    language_label: 'Language',
    'uv.welcome': 'Welcome'
  }, null, 2));
  writeFile(path.join(rootDir, 'dist', 'locales', 'es.json'), JSON.stringify({
    language_label: 'Idioma',
    'uv.welcome': 'Bienvenido'
  }, null, 2));
  writeFile(path.join(rootDir, 'locales', 'extracted-keys.json'), JSON.stringify([
    'language_label',
    'uv.welcome'
  ], null, 2));
  return rootDir;
}

test('extracts keys from the real translation surfaces', () => {
  const rootDir = makeFixtureRoot();
  const keys = collectTranslationKeys([
    path.join(rootDir, 'src'),
    path.join(rootDir, 'components', 'WebComponents')
  ]);

  assert.deepStrictEqual(keys, ['language_label', 'uv.welcome']);
});

test('validates locale coverage and build synchronization', () => {
  const rootDir = makeFixtureRoot();
  const report = validateLocales({
    sourceDir: path.join(rootDir, 'src', 'locales'),
    extractedKeysFile: path.join(rootDir, 'locales', 'extracted-keys.json'),
    distributionDir: path.join(rootDir, 'dist', 'locales')
  });

  assert.strictEqual(report.ok, true);
  assert.strictEqual(report.locales.every((locale) => locale.missingExtracted.length === 0), true);
});

test('reports stale dist locales when files drift', () => {
  const rootDir = makeFixtureRoot();
  writeFile(path.join(rootDir, 'dist', 'locales', 'es.json'), JSON.stringify({
    language_label: 'Idioma'
  }, null, 2));

  const report = syncLocales({
    sourceDir: path.join(rootDir, 'src', 'locales'),
    targetDir: path.join(rootDir, 'dist', 'locales'),
    checkOnly: true
  });

  assert.strictEqual(report.ok, false);
  assert.strictEqual(report.mismatches.some((item) => item.name === 'es.json'), true);
});