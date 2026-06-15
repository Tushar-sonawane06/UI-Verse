const assert = require('assert');
const { test } = require('node:test');
const { applyAssetPolicy, collectViolations } = require('../../scripts/security-asset-policy');

test('adds integrity and crossorigin to trusted CDN assets', () => {
  const html = `<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
</head>
</html>`;

  const updated = applyAssetPolicy(html);

  assert.match(updated, /font-awesome\/6\.5\.1\/css\/all\.min\.css" integrity="sha256-wiz7ZSCn\/btzhjKDQBms9Hx4sSeUYsDrTLg7roPstac=" crossorigin="anonymous"/);
  assert.match(updated, /cdn\.jsdelivr\.net\/npm\/flatpickr" integrity="sha256-Huqxy3eUcaCwqqk92RwusapTfWlvAasF6p2rxV6FJaE=" crossorigin="anonymous"/);
});

test('flags unapproved external assets', () => {
  const html = `<!doctype html>
<html>
<head>
  <script src="https://example.com/app.js"></script>
</head>
</html>`;

  const violations = collectViolations(html, 'fixture.html');

  assert.strictEqual(violations.length, 1);
  assert.match(violations[0].message, /Unapproved external script asset/);
});