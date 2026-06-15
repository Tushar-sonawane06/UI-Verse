#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { runPipeline } = require('./a11y-remediation');

const ROOT = process.cwd();
const BASELINE_PATH = path.join(ROOT, 'reports', 'a11y', 'audit-remediation-baseline.json');
const TOLERANCE = {
  errors: 0,
  warnings: 0,
  fixable: 0,
  averageScoreDrop: 0.25,
  passRateDrop: 0.25
};

function loadBaseline() {
  if (!fs.existsSync(BASELINE_PATH)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
}

function evaluateAgainstBaseline(currentTotals, baselineTotals) {
  const failures = [];

  if (currentTotals.errors > baselineTotals.errors + TOLERANCE.errors) {
    failures.push(`Errors regressed: ${currentTotals.errors} > ${baselineTotals.errors}`);
  }

  if (currentTotals.warnings > baselineTotals.warnings + TOLERANCE.warnings) {
    failures.push(`Warnings regressed: ${currentTotals.warnings} > ${baselineTotals.warnings}`);
  }

  if (currentTotals.fixable > baselineTotals.fixable + TOLERANCE.fixable) {
    failures.push(`Fixable issues regressed: ${currentTotals.fixable} > ${baselineTotals.fixable}`);
  }

  if (currentTotals.averageScore < baselineTotals.averageScore - TOLERANCE.averageScoreDrop) {
    failures.push(`Average score dropped: ${currentTotals.averageScore} < ${baselineTotals.averageScore}`);
  }

  if (currentTotals.passRate < baselineTotals.passRate - TOLERANCE.passRateDrop) {
    failures.push(`Pass rate dropped: ${currentTotals.passRate}% < ${baselineTotals.passRate}%`);
  }

  return failures;
}

function main() {
  const result = runPipeline({ apply: false });
  const currentTotals = result.after.report.totals;
  const required = [result.after.reportPath, result.after.markdownPath, result.after.dashboardPath, result.pipelinePath];
  const missing = required.filter((file) => !fs.existsSync(file));

  if (missing.length > 0) {
    console.error('Missing a11y remediation output(s):');
    missing.forEach((item) => console.error(`- ${path.relative(process.cwd(), item)}`));
    process.exit(1);
  }

  console.log('Accessibility remediation outputs exist.');
  console.log(`- Pages scanned: ${currentTotals.pages}`);
  console.log(`- Fixable issues: ${currentTotals.fixable}`);
  console.log(`- Errors: ${currentTotals.errors}`);
  console.log(`- Warnings: ${currentTotals.warnings}`);
  console.log(`- Pass rate: ${currentTotals.passRate}%`);

  const baseline = loadBaseline();

  if (!baseline) {
    console.error('Missing accessibility baseline file.');
    console.error(`- Expected: ${path.relative(ROOT, BASELINE_PATH)}`);
    process.exit(1);
  }

  const failures = evaluateAgainstBaseline(currentTotals, baseline.totals);

  if (failures.length > 0) {
    console.error('Accessibility remediation regression detected:');
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log('Accessibility baseline gate passed.');
}

if (require.main === module) {
  main();
}

module.exports = {
  BASELINE_PATH,
  TOLERANCE,
  evaluateAgainstBaseline,
  loadBaseline,
  main
};
