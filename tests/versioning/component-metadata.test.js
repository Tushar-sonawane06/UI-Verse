const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

const componentMetadata = require('../../scripts/component-metadata.js');

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeText(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, value, 'utf8');
}

function createFixture() {
  const rootDir = fs.mkdtempSync(path.join(os.tmpdir(), 'versioning-check-'));

  writeText(path.join(rootDir, 'button.html'), '<!doctype html><title>Buttons</title>');
  writeJson(path.join(rootDir, 'data', 'components.json'), [
    {
      id: 'button',
      title: 'Buttons',
      path: 'button.html'
    }
  ]);
  writeJson(path.join(rootDir, 'data', 'meta', 'button.json'), {
    id: 'button',
    title: 'Buttons',
    path: 'button.html',
    version: '0.1.0',
    changelog: [
      {
        version: '0.1.0',
        date: '2026-05-24',
        note: 'Initial metadata generated'
      }
    ]
  });

  return rootDir;
}

test('accepts synchronized metadata and changelog files', () => {
  const rootDir = createFixture();
  const changelog = componentMetadata.generateChangelog([
    {
      id: 'button',
      title: 'Buttons',
      path: 'button.html',
      version: '0.1.0',
      changelog: [
        {
          version: '0.1.0',
          date: '2026-05-24',
          note: 'Initial metadata generated'
        }
      ]
    }
  ], { rootDir, generatedAt: 'normalized' });

  writeText(path.join(rootDir, 'CHANGELOG_COMPONENTS.md'), changelog.replace('Generated: normalized', 'Generated: 2026-05-24T00:00:00.000Z'));

  const state = componentMetadata.buildVersioningState({ rootDir });

  assert.equal(state.ok, true);
  assert.equal(state.errors.length, 0);
  assert.equal(state.list.length, 1);
  assert.equal(state.metas.length, 1);
});

test('fails when the committed changelog is stale', () => {
  const rootDir = createFixture();
  const freshChangelog = componentMetadata.generateChangelog([
    {
      id: 'button',
      title: 'Buttons',
      path: 'button.html',
      version: '0.1.0',
      changelog: [
        {
          version: '0.1.0',
          date: '2026-05-24',
          note: 'Initial metadata generated'
        }
      ]
    }
  ], { rootDir, generatedAt: 'normalized' });

  writeText(path.join(rootDir, 'CHANGELOG_COMPONENTS.md'), `${freshChangelog}\n<!-- stale marker -->\n`);

  const state = componentMetadata.buildVersioningState({ rootDir });

  assert.equal(state.ok, false);
  assert.match(state.errors.join('\n'), /CHANGELOG_COMPONENTS\.md is out of date/);
});
