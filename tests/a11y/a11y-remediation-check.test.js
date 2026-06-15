const assert = require('assert');
const { test } = require('node:test');
const { evaluateAgainstBaseline, TOLERANCE } = require('../../scripts/a11y-remediation-check');

test('passes when totals match baseline', () => {
  const baseline = {
    errors: 10,
    warnings: 20,
    fixable: 5,
    averageScore: 80,
    passRate: 50
  };

  const failures = evaluateAgainstBaseline({ ...baseline }, baseline);
  assert.deepStrictEqual(failures, []);
});

test('fails when errors, warnings, or fixable regress', () => {
  const baseline = {
    errors: 10,
    warnings: 20,
    fixable: 5,
    averageScore: 80,
    passRate: 50
  };

  const failures = evaluateAgainstBaseline({
    errors: baseline.errors + TOLERANCE.errors + 1,
    warnings: baseline.warnings + TOLERANCE.warnings + 1,
    fixable: baseline.fixable + TOLERANCE.fixable + 1,
    averageScore: baseline.averageScore,
    passRate: baseline.passRate
  }, baseline);

  assert.strictEqual(failures.length, 3);
});

test('fails when average score or pass rate drop beyond tolerance', () => {
  const baseline = {
    errors: 10,
    warnings: 20,
    fixable: 5,
    averageScore: 80,
    passRate: 50
  };

  const failures = evaluateAgainstBaseline({
    errors: baseline.errors,
    warnings: baseline.warnings,
    fixable: baseline.fixable,
    averageScore: baseline.averageScore - TOLERANCE.averageScoreDrop - 0.5,
    passRate: baseline.passRate - TOLERANCE.passRateDrop - 0.5
  }, baseline);

  assert.strictEqual(failures.length, 2);
});