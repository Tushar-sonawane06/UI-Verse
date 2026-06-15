const { execSync } = require('child_process');
const path = require('path');

const ROOT = process.cwd();
const SNAPSHOT_DIR = path.join(ROOT, 'tests', 'visual', 'component-screenshots.spec.ts-snapshots');

function main() {
  require('fs').mkdirSync(SNAPSHOT_DIR, { recursive: true });

  const cmd = `npx playwright test tests/visual/component-screenshots.spec.ts --config=playwright.component-visual.config.ts --update-snapshots --reporter=list`;
  console.log('Running:', cmd);
  execSync(cmd, { cwd: ROOT, stdio: 'inherit' });

  console.log('\nBaselines updated in:', SNAPSHOT_DIR);
}

if (require.main === module) {
  main();
}