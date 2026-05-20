/**
 * UIverse - Visual Regression Baseline Manager
 * Manages visual test baselines for CI/CD
 * 
 * Usage: npm run test:visual:status
 *        npm run test:visual:compare
 *        npm run test:visual:update
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const SNAPSHOTS_DIR = path.join(PROJECT_ROOT, 'tests', 'visual', 'visual-regression.spec.ts-snapshots');
const PLAYWRIGHT_CONFIG = path.join(PROJECT_ROOT, 'playwright.config.ts');

function getStatus() {
  console.log('\n=== Visual Regression Baseline Status ===\n');
  
  if (!fs.existsSync(SNAPSHOTS_DIR)) {
    console.log('⚠ No baselines found.');
    console.log('Run: npm run test:visual:update\n');
    return;
  }
  
  const files = fs.readdirSync(SNAPSHOTS_DIR).filter(f => f.endsWith('.png'));
  const desktopCount = files.filter(f => f.includes('desktop')).length;
  const mobileCount = files.filter(f => f.includes('mobile')).length;
  
  console.log(`✓ Total baselines: ${files.length}`);
  console.log(`  - Desktop (1280x800): ${desktopCount}`);
  console.log(`  - Mobile (375x667): ${mobileCount}`);
  console.log('\nTo update baselines: npm run test:visual:update');
  console.log('To run tests: npm run test:visual\n');
}

function compare() {
  console.log('\n=== Visual Comparison ===\n');
  console.log('For detailed visual comparisons:');
  console.log('1. Add PERCY_TOKEN to GitHub secrets (percy.io)');
  console.log('2. Add CHROMATIC_PROJECT_TOKEN to GitHub secrets (chromatic.com)');
  console.log('3. Workflows will auto-run on PRs\n');
  console.log('Manual comparison: npm run test:visual\n');
}

function main() {
  const args = process.argv.slice(2);
  const cmd = args[0] || 'status';
  
  switch (cmd) {
    case 'status':
      getStatus();
      break;
    case 'compare':
      compare();
      break;
    case 'update':
      console.log('Run: npm run test:visual:update');
      break;
    default:
      console.log('Usage: node visual-baseline-manager.js [status|compare|update]');
  }
}

main();