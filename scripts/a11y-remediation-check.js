#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { run } = require('./accessibility-engine');

const result = run({ apply: false });
const required = [result.reportPath, result.markdownPath, result.dashboardPath];
const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length > 0) {
  console.error('Missing a11y remediation output(s):');
  missing.forEach((item) => console.error(`- ${path.relative(process.cwd(), item)}`));
  process.exit(1);
}

console.log('Accessibility remediation outputs exist.');
console.log(`- Pages scanned: ${result.report.totals.pages}`);
console.log(`- Fixable issues: ${result.report.totals.fixable}`);

if (result.report.totals.errors > 0) {
  process.exitCode = 1;
}
