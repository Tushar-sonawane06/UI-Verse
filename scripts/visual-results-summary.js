#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const inputPath = path.join(process.cwd(), 'reports', 'visual-scale', 'results.json');
const outputDir = path.join(process.cwd(), 'reports', 'visual-scale');
const outputPath = path.join(outputDir, 'summary.json');

if (!fs.existsSync(inputPath)) {
  console.error('Visual results not found. Run visual scale tests first.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const suites = data.suites || [];

let passed = 0;
let failed = 0;
let skipped = 0;

function walkSuite(suite) {
  if (suite.specs) {
    for (const spec of suite.specs) {
      if (!spec.tests) continue;
      for (const t of spec.tests) {
        const result = (t.results && t.results[t.results.length - 1]) || {};
        const status = result.status || t.status;
        if (status === 'passed') passed += 1;
        else if (status === 'skipped') skipped += 1;
        else failed += 1;
      }
    }
  }
  if (suite.suites) suite.suites.forEach(walkSuite);
}

suites.forEach(walkSuite);

const summary = {
  timestamp: new Date().toISOString(),
  total: passed + failed + skipped,
  passed,
  failed,
  skipped,
  successRate: passed + failed > 0 ? Number(((passed / (passed + failed)) * 100).toFixed(2)) : 100
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(summary, null, 2));

console.log('Visual scale summary:');
console.log(`  Total: ${summary.total}`);
console.log(`  Passed: ${summary.passed}`);
console.log(`  Failed: ${summary.failed}`);
console.log(`  Skipped: ${summary.skipped}`);
console.log(`  Success rate: ${summary.successRate}%`);
console.log(`Saved to ${path.relative(process.cwd(), outputPath)}`);

if (failed > 0) process.exit(1);
