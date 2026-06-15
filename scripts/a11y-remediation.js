#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { run, applyFixes } = require('./accessibility-engine');

const ROOT = process.cwd();
const PIPELINE_REPORT_PATH = path.join(ROOT, 'reports', 'a11y', 'remediation-pipeline.json');

function parseArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    apply: args.has('--apply'),
    quiet: args.has('--quiet'),
    strict: args.has('--strict')
  };
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function summarizeDelta(beforeTotals, afterTotals) {
  return {
    errors: beforeTotals.errors - afterTotals.errors,
    warnings: beforeTotals.warnings - afterTotals.warnings,
    fixable: beforeTotals.fixable - afterTotals.fixable,
    averageScore: Number((afterTotals.averageScore - beforeTotals.averageScore).toFixed(2)),
    passRate: Number((afterTotals.passRate - beforeTotals.passRate).toFixed(2))
  };
}

function runPipeline(options = {}) {
  const before = run({ apply: false, rootDir: ROOT });
  const remediation = options.apply ? applyFixes(before.fixes, ROOT) : { filesChanged: 0, fixesApplied: 0 };
  const after = run({ apply: false, rootDir: ROOT });
  const delta = summarizeDelta(before.report.totals, after.report.totals);

  const pipeline = {
    generatedAt: new Date().toISOString(),
    mode: options.apply ? 'apply-and-verify' : 'audit-only',
    before: before.report.totals,
    after: after.report.totals,
    delta,
    remediation,
    reportPath: after.reportPath,
    markdownPath: after.markdownPath,
    dashboardPath: after.dashboardPath
  };

  ensureDir(PIPELINE_REPORT_PATH);
  fs.writeFileSync(PIPELINE_REPORT_PATH, JSON.stringify(pipeline, null, 2) + '\n', 'utf8');

  return {
    before,
    after,
    remediation,
    delta,
    pipeline,
    pipelinePath: PIPELINE_REPORT_PATH
  };
}

function main() {
  const options = parseArgs(process.argv);
  const result = runPipeline({ apply: options.apply });

  if (!options.quiet) {
    console.log('Accessibility audit & remediation complete.');
    console.log(`- Report: ${result.after.reportPath}`);
    console.log(`- Markdown: ${result.after.markdownPath}`);
    console.log(`- Dashboard: ${result.after.dashboardPath}`);
    console.log(`- Pipeline: ${result.pipelinePath}`);
    console.log(`- Pages scanned: ${result.after.report.totals.pages}`);
    console.log(`- Pass rate: ${result.after.report.totals.passRate}%`);
    console.log(`- Fixable issues: ${result.after.report.totals.fixable}`);
    console.log(`- Applied fixes: ${result.remediation.fixesApplied}`);
    console.log(`- Files changed: ${result.remediation.filesChanged}`);
  }

  if (options.strict && result.after.report.totals.errors > 0) {
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
  parseArgs,
  runPipeline,
  run,
  applyFixes
};
