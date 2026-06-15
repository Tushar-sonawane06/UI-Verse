const assert = require('assert');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const { test } = require('node:test');

const ROOT = path.resolve(__dirname, '..', '..');
const INDEX = path.join(ROOT, 'data', 'snippets', 'index.json');

test('snippet export produces index and files', () => {
  execSync('node scripts/snippet-exporter.js', { cwd: ROOT, stdio: 'inherit' });
  assert.ok(fs.existsSync(INDEX), 'index.json should exist');
  const idx = JSON.parse(fs.readFileSync(INDEX,'utf8'));
  assert.ok(Array.isArray(idx) && idx.length > 0, 'index should be non-empty array');
  // each entry should have id, html, jsx, vue, hash
  for(const e of idx){
    assert.ok(e.id, 'entry must have id');
    assert.ok(e.html && e.jsx && e.vue && e.hash, 'entry should include html/jsx/vue/hash');
  }
});

test('snippet validate passes', () => {
  execSync('node scripts/snippet-validate.js', { cwd: ROOT, stdio: 'inherit' });
});
