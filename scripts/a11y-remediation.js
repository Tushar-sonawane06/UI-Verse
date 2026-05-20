#!/usr/bin/env node

const { run, applyFixes } = require('./accessibility-engine');

function parseArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    apply: args.has('--apply'),
    quiet: args.has('--quiet')
  };
}

function main() {
  const options = parseArgs(process.argv);
  const result = run({ apply: options.apply });

  if (!options.quiet) {
    console.log('Accessibility audit & remediation complete.');
    console.log(`- Report: ${result.reportPath}`);
    console.log(`- Markdown: ${result.markdownPath}`);
    console.log(`- Dashboard: ${result.dashboardPath}`);
    console.log(`- Pages scanned: ${result.report.totals.pages}`);
    console.log(`- Pass rate: ${result.report.totals.passRate}%`);
    console.log(`- Fixable issues: ${result.report.totals.fixable}`);
    console.log(`- Applied fixes: ${options.apply ? result.fixes.length : 0}`);
  }

  if (result.report.totals.errors > 0) {
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
  parseArgs,
  run,
  applyFixes
};
