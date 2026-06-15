const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { validateComponentRegistry } = require('../../scripts/component-registry-check');
const { generateRegistry } = require('../../scripts/generate-component-registry');

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeFile(filePath, value = '') {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, value, 'utf8');
}

function createBaseFixture() {
  const rootDir = fs.mkdtempSync(path.join(os.tmpdir(), 'registry-check-'));

  writeFile(path.join(rootDir, 'button.html'), '<!doctype html><title>Button</title>');
  writeFile(path.join(rootDir, 'data', 'snippets', 'button', 'button.html'), '<button>ok</button>');

  writeJson(path.join(rootDir, 'data', 'components.json'), [
    {
      id: 'button',
      title: 'Buttons',
      path: 'button.html',
      aliases: ['btn']
    }
  ]);

  generateRegistry({ rootDir });

  writeJson(path.join(rootDir, 'data', 'meta', 'button.json'), {
    id: 'button',
    title: 'Buttons',
    path: 'button.html',
    version: '0.1.0',
    changelog: [
      {
        version: '0.1.0',
        date: '2026-05-24',
        note: 'seed'
      }
    ]
  });

  writeJson(path.join(rootDir, 'data', 'snippets', 'index.json'), [
    {
      id: 'button'
    }
  ]);

  return rootDir;
}

test('passes for a consistent registry/metadata/snippets setup', () => {
  const rootDir = createBaseFixture();
  const result = validateComponentRegistry({ rootDir });

  assert.equal(result.ok, true);
  assert.equal(result.errors.length, 0);
  assert.equal(result.stats.registryEntries, 1);
  assert.equal(result.stats.metadataEntries, 1);
  assert.equal(result.stats.snippetEntries, 1);
});

test('reports missing registry entries discovered from snippets', () => {
  const rootDir = createBaseFixture();

  writeFile(path.join(rootDir, 'cards.html'), '<!doctype html><title>Cards</title>');
  writeFile(path.join(rootDir, 'data', 'snippets', 'cards', 'cards.html'), '<div>card</div>');
  writeJson(path.join(rootDir, 'data', 'snippets', 'index.json'), [
    { id: 'button' },
    { id: 'cards' }
  ]);

  const result = validateComponentRegistry({ rootDir });

  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /\[cards\] missing registry entry: discovered from snippets\./);
});

test('fails on invalid registry page paths', () => {
  const rootDir = createBaseFixture();

  writeJson(path.join(rootDir, 'data', 'components.json'), [
    {
      id: 'button',
      title: 'Buttons',
      path: 'missing-button-page.html',
      aliases: ['btn']
    }
  ]);

  const result = validateComponentRegistry({ rootDir });

  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /\[button\] invalid path 'missing-button-page\.html'/);
});

test('fails when aliases are duplicated across components', () => {
  const rootDir = createBaseFixture();

  writeFile(path.join(rootDir, 'cards.html'), '<!doctype html><title>Cards</title>');
  writeFile(path.join(rootDir, 'data', 'snippets', 'cards', 'cards.html'), '<div>card</div>');

  writeJson(path.join(rootDir, 'data', 'components.json'), [
    {
      id: 'button',
      title: 'Buttons',
      path: 'button.html',
      aliases: ['shared-alias']
    },
    {
      id: 'cards',
      title: 'Cards',
      path: 'cards.html',
      aliases: ['shared-alias']
    }
  ]);

  writeJson(path.join(rootDir, 'data', 'meta', 'cards.json'), {
    id: 'cards',
    title: 'Cards',
    path: 'cards.html',
    version: '0.1.0',
    changelog: [
      {
        version: '0.1.0',
        date: '2026-05-24',
        note: 'seed'
      }
    ]
  });

  writeJson(path.join(rootDir, 'data', 'snippets', 'index.json'), [
    { id: 'button' },
    { id: 'cards' }
  ]);

  const result = validateComponentRegistry({ rootDir });

  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /Duplicate alias 'shared-alias' used by multiple components: button, cards/);
});

test('fails when the committed registry is stale', () => {
  const rootDir = createBaseFixture();

  writeJson(path.join(rootDir, 'data', 'registry.json'), {
    version: '1.0.0',
    registry: []
  });

  const result = validateComponentRegistry({ rootDir });

  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /data\/registry\.json is out of date/);
});
