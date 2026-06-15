const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'reports', 'perf');
const EXCLUDED_DIRS = new Set(['node_modules', '.git', 'tests', 'playwright-report', 'reports', 'dist']);

const CSS_BUDGET_BYTES = 5 * 1024;

function getChangedFiles(ext) {
  try {
    const output = execSync('git diff --name-only origin/main...HEAD', { encoding: 'utf8', cwd: ROOT });
    return output.split('\n').filter(f => f.endsWith(ext)).map(f => path.join(ROOT, f));
  } catch (e) {
    return null;
  }
}

function getAllFiles(dir, ext, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name)) getAllFiles(path.join(dir, entry.name), ext, files);
    } else if (entry.isFile() && entry.name.endsWith(ext)) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function checkCssBudget(filePath) {
  const size = fs.statSync(filePath).size;
  return {
    path: path.relative(ROOT, filePath),
    size,
    pass: size <= CSS_BUDGET_BYTES,
    budget: CSS_BUDGET_BYTES
  };
}

function checkRenderBlocking(htmlPath) {
  const content = fs.readFileSync(htmlPath, 'utf8');
  const headMatch = content.match(/<<head[^>]*>([\s\S]*?)<<\/head>/i);
  if (!headMatch) return { path: path.relative(ROOT, htmlPath), blockingScripts: [], pass: true };

  const head = headMatch[1];
  const scripts = head.match(/<<script\b[^>]*>([\s\S]*?)<<\/script>/gi) || [];
  const blocking = scripts.filter(s => !/\basync\b/i.test(s) && !/\bdefer\b/i.test(s) && !/\btype\s*=\s*["']module["']/i.test(s));

  return {
    path: path.relative(ROOT, htmlPath),
    blockingScripts: blocking.map(s => s.slice(0, 100)),
    pass: blocking.length === 0
  };
}

function main() {
  const changedCss = getChangedFiles('.css');
  const changedHtml = getChangedFiles('.html');

  const cssFiles = changedCss || getAllFiles(ROOT, '.css');
  const htmlFiles = changedHtml || getAllFiles(ROOT, '.html');

  const cssResults = cssFiles.map(checkCssBudget);
  const htmlResults = htmlFiles.map(checkRenderBlocking);

  const cssFailures = cssResults.filter(r => !r.pass);
  const htmlFailures = htmlResults.filter(r => !r.pass);

  const report = {
    generatedAt: new Date().toISOString(),
    css: {
      total: cssResults.length,
      passed: cssResults.length - cssFailures.length,
      failed: cssFailures.length,
      details: cssResults
    },
    renderBlocking: {
      total: htmlResults.length,
      passed: htmlResults.length - htmlFailures.length,
      failed: htmlFailures.length,
      details: htmlResults
    }
  };

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(path.join(REPORT_DIR, 'perf-component-report.json'), JSON.stringify(report, null, 2) + '\n');

  let md = `# Performance Component Gate\n\n`;
  md += `Generated: ${report.generatedAt}\n\n`;
  md += `## CSS Budget (< 5KB)\n\n`;
  md += `- Total: ${report.css.total}\n`;
  md += `- Passed: ${report.css.passed}\n`;
  md += `- Failed: ${report.css.failed}\n\n`;
  if (cssFailures.length > 0) {
    for (const f of cssFailures) {
      md += `- **${f.path}**: ${(f.size / 1024).toFixed(2)}KB > ${(f.budget / 1024).toFixed(0)}KB\n`;
    }
  }

  md += `\n## Render-Blocking Scripts\n\n`;
  md += `- Total: ${report.renderBlocking.total}\n`;
  md += `- Passed: ${report.renderBlocking.passed}\n`;
  md += `- Failed: ${report.renderBlocking.failed}\n\n`;
  if (htmlFailures.length > 0) {
    for (const f of htmlFailures) {
      md += `- **${f.path}**: ${f.blockingScripts.length} blocking script(s) in <head>\n`;
    }
  }

  fs.writeFileSync(path.join(REPORT_DIR, 'perf-component-report.md'), md);

  console.log(`CSS Budget: ${report.css.passed}/${report.css.total} passed`);
  console.log(`Render Blocking: ${report.renderBlocking.passed}/${report.renderBlocking.total} passed`);

  if (cssFailures.length > 0 || htmlFailures.length > 0) {
    console.error(`\nPerformance gate failed.`);
    process.exit(1);
  }

  console.log('All performance checks passed.');
}

module.exports = { checkCssBudget, checkRenderBlocking };

if (require.main === module) {
  main();
}