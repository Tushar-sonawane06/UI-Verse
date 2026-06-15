const test = require('node:test');
const assert = require('node:assert/strict');

const DependencyManager = require('../../js/core/dependency-manager.js');

test('builds transitive dependency chains for registered modules', () => {
  DependencyManager.reset();
  DependencyManager.register('Alpha', ['Beta']);
  DependencyManager.register('Beta', ['Gamma']);
  DependencyManager.register('Gamma', []);

  const transitive = DependencyManager.getTransitiveDependencies('Alpha', ['Alpha', 'Beta', 'Gamma']);

  assert.deepEqual(transitive, ['Beta', 'Gamma']);

  const report = DependencyManager.validateGraph(['Alpha', 'Beta', 'Gamma']);
  assert.equal(report.valid, true);
  assert.equal(report.transitive.length, 1);
  assert.equal(report.visualization.length, 3);

  DependencyManager.reset();
});

test('detects circular dependencies in transitive graph traversal', () => {
  DependencyManager.reset();
  DependencyManager.register('Alpha', ['Beta']);
  DependencyManager.register('Beta', ['Gamma']);
  DependencyManager.register('Gamma', ['Alpha']);

  const cycles = DependencyManager.detectCycles(['Alpha', 'Beta', 'Gamma']);
  const report = DependencyManager.validateGraph(['Alpha', 'Beta', 'Gamma']);

  assert.ok(cycles.length > 0);
  assert.equal(report.valid, false);
  assert.ok(report.circular.some((message) => message.includes('Alpha')));

  DependencyManager.reset();
});