#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checklistPath = path.join(root, '.github', 'ACCESSIBILITY_CHECKLIST.md');
const argv = process.argv.slice(2);
const checkOnly = argv.includes('--check');

function runCommand(cmd, args, opts = {}) {
  console.log(`> ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, Object.assign({ stdio: 'inherit', cwd: root, shell: true }, opts));
  return res.status === 0;
}

function main() {
  console.log('Accessibility checklist runner');
  if (!fs.existsSync(checklistPath)) {
    console.error('Checklist not found at', checklistPath);
    process.exit(2);
  }

  // Run automated checks. These mirror CI steps.
  const steps = [
    { name: 'Axe remediation audit (strict)', cmd: 'node', args: ['scripts/a11y-remediation.js', '--quiet', '--strict'] },
    { name: 'Playwright E2E accessibility tests', cmd: 'npx', args: ['playwright', 'test', 'tests/visual/accessibility', '--project=chromium-desktop'] }
  ];

  let allOk = true;
  for (const s of steps) {
    console.log(`\nRunning: ${s.name}`);
    const ok = runCommand(s.cmd, s.args);
    if (!ok) {
      console.error(`Step failed: ${s.name}`);
      allOk = false;
      if (checkOnly) break;
    }
  }

  // Summarize checklist file into reports for CI step summary
  const summaryOut = path.join(root, 'reports', 'a11y', 'checklist-summary.md');
  fs.mkdirSync(path.dirname(summaryOut), { recursive: true });
  const checklist = fs.readFileSync(checklistPath, 'utf8');
  let report = `# Accessibility Checklist Summary\n\n`;
  report += checklist + '\n\n';
  report += `Automated checks: ${allOk ? '✅ Passed' : '❌ Some checks failed'}\n`;
  fs.writeFileSync(summaryOut, report, 'utf8');
  console.log('\nWrote checklist summary to', summaryOut);

  if (!allOk) process.exit(1);
}

if (require.main === module) main();
