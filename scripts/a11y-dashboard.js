const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const IGNORE_DIRS = new Set(['.git', 'node_modules', 'Public', 'playwright-report', 'test-results']);
const OUTPUT_DIR = path.join(ROOT, 'public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'a11y-dashboard.html');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function scanPage(file, content) {
  const issues = [];
  const warnings = [];

  // Check for lang attribute
  if (!/<html[^>]*\blang\s*=\s*['"][^'"]+['"]/i.test(content)) {
    issues.push({ type: 'error', rule: 'Missing lang attribute', desc: '<html> element missing lang attribute' });
  }

  // Check for main landmark
  if (!/<main\b|role\s*=\s*['"]main['"]/i.test(content)) {
    warnings.push({ type: 'warning', rule: 'No main landmark', desc: 'Page lacks <main> or role="main"' });
  }

  // Check for images without alt
  const imgMatches = content.match(/<img\b[^>]*>/gi) || [];
  const imgNoAlt = imgMatches.filter(img => !(/\balt\s*=\s*['"][^'"]*['"]/i.test(img)));
  if (imgNoAlt.length > 0) {
    warnings.push({ type: 'warning', rule: `${imgNoAlt.length} image(s) missing alt`, desc: `Found ${imgNoAlt.length} <img> without alt attribute` });
  }

  // Check for buttons without aria-label or text
  const buttonMatches = content.match(/<button[^>]*>/gi) || [];
  const buttonEmpty = buttonMatches.filter(btn => {
    const hasLabel = /aria-label\s*=\s*['"][^'"]*['"]/i.test(btn);
    const hasTitle = /title\s*=\s*['"][^'"]*['"]/i.test(btn);
    return !hasLabel && !hasTitle;
  });
  if (buttonEmpty.length > 0) {
    issues.push({ type: 'warning', rule: `${buttonEmpty.length} button(s) lack accessible labels`, desc: `Found ${buttonEmpty.length} buttons without aria-label or title` });
  }

  // Check for form inputs without labels
  const inputMatches = content.match(/<input\b[^>]*type\s*=\s*['"]?(text|password|email|number|search|tel|url)['"]*[^>]*>/gi) || [];
  const inputNoLabel = inputMatches.filter(inp => {
    const id = /id\s*=\s*['"]([^'"]*)['"]/i.exec(inp);
    if (!id) return true;
    const labelRegex = new RegExp(`<label[^>]*for\\s*=\\s*['"]${id[1]}['"][^>]*>`, 'i');
    return !labelRegex.test(content);
  });
  if (inputNoLabel.length > 0) {
    warnings.push({ type: 'warning', rule: `${inputNoLabel.length} form input(s) missing labels`, desc: `Found ${inputNoLabel.length} form inputs without associated <label>` });
  }

  // Check for empty headings
  const headingMatches = content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi) || [];
  const emptyHeadings = headingMatches.filter(h => {
    const inner = h.replace(/<[^>]*>/g, '').trim();
    return inner.length === 0;
  });
  if (emptyHeadings.length > 0) {
    issues.push({ type: 'error', rule: `${emptyHeadings.length} empty heading(s)`, desc: `Found ${emptyHeadings.length} headings with no text content` });
  }

  // Check for links without text or aria-label
  const linkMatches = content.match(/<a\b[^>]*>.*?<\/a>/gi) || [];
  const linkEmpty = linkMatches.filter(link => {
    const hasLabel = /aria-label\s*=\s*['"][^'"]*['"]/i.test(link);
    const hasTitle = /title\s*=\s*['"][^'"]*['"]/i.test(link);
    const innerText = link.replace(/<[^>]*>/g, '').trim();
    return !hasLabel && !hasTitle && innerText.length === 0;
  });
  if (linkEmpty.length > 0) {
    issues.push({ type: 'error', rule: `${linkEmpty.length} link(s) without accessible text`, desc: `Found ${linkEmpty.length} links without text or aria-label` });
  }

  return { errors: issues.filter(i => i.type === 'error'), warnings: issues.filter(i => i.type === 'warning').concat(warnings) };
}

function run() {
  const htmlFiles = walk(ROOT);
  const pages = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const file of htmlFiles) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const scan = scanPage(file, content);

    const errorCount = scan.errors.length;
    const warningCount = scan.warnings.length;
    const score = Math.max(0, 100 - (errorCount * 10 + warningCount * 2));

    totalErrors += errorCount;
    totalWarnings += warningCount;

    pages.push({
      path: rel,
      score,
      errors: errorCount,
      warnings: warningCount,
      issues: [...scan.errors, ...scan.warnings]
    });
  }

  pages.sort((a, b) => a.score - b.score);

  const avgScore = Math.round(pages.reduce((sum, p) => sum + p.score, 0) / pages.length);
  const passRate = Math.round((pages.filter(p => p.errors === 0).length / pages.length) * 100);

  // Generate dashboard HTML
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Dashboard</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; color: #333; }
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
    header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; border-radius: 8px; margin-bottom: 30px; }
    header h1 { font-size: 2.5em; margin-bottom: 10px; }
    .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px; }
    .summary-card { background: rgba(255,255,255,0.15); padding: 15px; border-radius: 6px; text-align: center; }
    .summary-card .label { font-size: 0.85em; opacity: 0.9; }
    .summary-card .value { font-size: 2em; font-weight: bold; margin-top: 5px; }
    .status { background: white; border-radius: 8px; padding: 30px; margin-bottom: 30px; }
    .status h2 { color: #667eea; margin-bottom: 20px; font-size: 1.5em; }
    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; }
    .stat { text-align: center; }
    .stat .number { font-size: 2.5em; font-weight: bold; color: #667eea; }
    .stat .label { color: #666; font-size: 0.9em; margin-top: 5px; }
    .pages { background: white; border-radius: 8px; padding: 20px; }
    .pages h2 { color: #667eea; margin-bottom: 20px; font-size: 1.5em; }
    .page-list { list-style: none; }
    .page-item { padding: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
    .page-item:last-child { border-bottom: none; }
    .page-path { flex: 1; font-family: monospace; font-size: 0.9em; color: #444; }
    .page-score { display: flex; gap: 15px; align-items: center; }
    .score-bar { width: 100px; height: 8px; background: #ddd; border-radius: 4px; overflow: hidden; }
    .score-fill { height: 100%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 4px; transition: width 0.3s; }
    .score-text { font-weight: bold; min-width: 50px; text-align: right; }
    .score-text.perfect { color: #22c55e; }
    .score-text.good { color: #3b82f6; }
    .score-text.fair { color: #f59e0b; }
    .score-text.poor { color: #ef4444; }
    .issues { margin-top: 10px; font-size: 0.85em; color: #666; }
    .issues span { display: inline-block; margin-right: 15px; }
    .error { color: #ef4444; }
    .warning { color: #f59e0b; }
    .issue-detail { background: #f9f9f9; padding: 10px; border-radius: 4px; margin-top: 5px; font-size: 0.85em; color: #555; }
    footer { text-align: center; color: #999; font-size: 0.9em; margin-top: 40px; padding: 20px 0; border-top: 1px solid #ddd; }
    @media (max-width: 768px) {
      header h1 { font-size: 1.8em; }
      .page-score { flex-direction: column; align-items: flex-start; }
      .score-bar { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>♿ Accessibility Dashboard</h1>
      <p>Monitor accessibility compliance across all component pages</p>
      <div class="summary">
        <div class="summary-card">
          <div class="label">Overall Score</div>
          <div class="value">${avgScore}%</div>
        </div>
        <div class="summary-card">
          <div class="label">Pages Scanned</div>
          <div class="value">${pages.length}</div>
        </div>
        <div class="summary-card">
          <div class="label">Pass Rate</div>
          <div class="value">${passRate}%</div>
        </div>
        <div class="summary-card">
          <div class="label">Total Issues</div>
          <div class="value">${totalErrors + totalWarnings}</div>
        </div>
      </div>
    </header>

    <div class="status">
      <h2>Scan Summary</h2>
      <div class="stats">
        <div class="stat">
          <div class="number" style="color: #ef4444;">${totalErrors}</div>
          <div class="label">Critical Errors</div>
        </div>
        <div class="stat">
          <div class="number" style="color: #f59e0b;">${totalWarnings}</div>
          <div class="label">Warnings</div>
        </div>
        <div class="stat">
          <div class="number" style="color: #22c55e;">${pages.filter(p => p.errors === 0).length}</div>
          <div class="label">Pages with No Errors</div>
        </div>
        <div class="stat">
          <div class="number" style="color: #667eea;">${pages.filter(p => p.score === 100).length}</div>
          <div class="label">Perfect Pages (100%)</div>
        </div>
      </div>
    </div>

    <div class="pages">
      <h2>Page-by-Page Results</h2>
      <ul class="page-list">
        ${pages.map(page => {
          let scoreClass = 'perfect';
          if (page.score < 100 && page.score >= 80) scoreClass = 'good';
          else if (page.score < 80 && page.score >= 60) scoreClass = 'fair';
          else if (page.score < 60) scoreClass = 'poor';

          let issuesHtml = '';
          if (page.issues.length > 0) {
            issuesHtml = '<li class="page-item" style="padding: 0 15px 15px;"><div style="width: 100%; margin-left: calc(100% - 50px);"><div class="issues">';
            if (page.errors.length > 0) issuesHtml += '<span class="error">❌ ' + page.errors.length + ' error(s)</span>';
            if (page.warnings.length > 0) issuesHtml += '<span class="warning">⚠️ ' + page.warnings.length + ' warning(s)</span>';
            issuesHtml += '</div>';
            page.issues.slice(0, 3).forEach(issue => {
              issuesHtml += '<div class="issue-detail">• <strong>' + issue.rule + '</strong>: ' + issue.desc + '</div>';
            });
            if (page.issues.length > 3) {
              issuesHtml += '<div class="issue-detail">... and ' + (page.issues.length - 3) + ' more issue(s)</div>';
            }
            issuesHtml += '</div></li>';
          }

          return '<li class="page-item">' +
            '<div class="page-path">' + page.path + '</div>' +
            '<div class="page-score">' +
            '<div class="score-bar"><div class="score-fill" style="width: ' + page.score + '%;"></div></div>' +
            '<div class="score-text ' + scoreClass + '">' + page.score + '%</div>' +
            '</div></li>' + issuesHtml;
        }).join('')}
      </ul>
    </div>

    <footer>
      <p>Generated: ${new Date().toLocaleString()}</p>
      <p>Run \`npm run a11y:dashboard\` to regenerate this report</p>
    </footer>
  </div>
</body>
</html>`;

  fs.writeFileSync(OUTPUT_FILE, html);
  console.log(`✅ Accessibility dashboard generated: ${OUTPUT_FILE}`);
  console.log(`\n📊 Summary:`);
  console.log(`  • Pages scanned: ${pages.length}`);
  console.log(`  • Average score: ${avgScore}%`);
  console.log(`  • Pass rate: ${passRate}%`);
  console.log(`  • Critical errors: ${totalErrors}`);
  console.log(`  • Warnings: ${totalWarnings}`);
  console.log(`\n📈 Open the dashboard at: ./public/a11y-dashboard.html`);
}

run();
