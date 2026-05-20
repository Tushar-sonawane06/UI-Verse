const fs = require('fs');
const path = require('path');

const DEFAULT_ROOT = process.cwd();
const IGNORE_DIRS = new Set(['.git', 'node_modules', 'Public', 'playwright-report', 'test-results', 'reports']);
const EXCLUDED_FILES = new Set(['a11y-dashboard.html']);

function walk(dir, files = [], options = {}) {
  const ignoreDirs = options.ignoreDirs || IGNORE_DIRS;
  const excludedFiles = options.excludedFiles || EXCLUDED_FILES;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files, options);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html') && !excludedFiles.has(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function countMatches(regex, text) {
  const match = text.match(new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : `${regex.flags}g`));
  return match ? match.length : 0;
}

function stripTags(value) {
  return String(value || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function hasAccessibleName(fragment) {
  return /aria-label\s*=\s*['"][^'"]+['"]/i.test(fragment)
    || /aria-labelledby\s*=\s*['"][^'"]+['"]/i.test(fragment)
    || /title\s*=\s*['"][^'"]+['"]/i.test(fragment)
    || stripTags(fragment).length > 0;
}

function buildIssue({ rule, severity, message, detail, selector, fixable, patch }) {
  return { rule, severity, message, detail, selector, fixable: Boolean(fixable), patch: patch || null };
}

function analyzeFile(filePath, options = {}) {
  const rootDir = options.rootDir || DEFAULT_ROOT;
  const rel = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const content = readText(filePath);
  const issues = [];
  const fixes = [];

  const htmlMatch = content.match(/<html[^>]*>/i);
  if (!htmlMatch) {
    issues.push(buildIssue({
      rule: 'missing-html',
      severity: 'error',
      message: 'Missing <html> element',
      detail: 'The page should start with a root <html> element.',
      selector: 'html',
      fixable: false
    }));
  }

  if (!/<html[^>]*\blang\s*=\s*['"][^'"]+['"]/i.test(content)) {
    issues.push(buildIssue({
      rule: 'html-lang',
      severity: 'error',
      message: 'Missing lang attribute on <html>',
      detail: 'Add a language tag so assistive technologies can announce the correct locale.',
      selector: 'html',
      fixable: true,
      patch: {
        kind: 'html-attribute',
        selector: 'html',
        attribute: 'lang',
        value: 'en'
      }
    }));
    fixes.push('html-lang');
  }

  const hasMain = /<main\b|role\s*=\s*['"]main['"]/i.test(content);
  if (!hasMain) {
    issues.push(buildIssue({
      rule: 'main-landmark',
      severity: 'error',
      message: 'Missing main landmark',
      detail: 'Wrap primary content in <main> or add role="main".',
      selector: 'body',
      fixable: false
    }));
  }

  const skipLinkExists = /class\s*=\s*['"][^'"]*skip-link[^'"]*['"]/i.test(content) || /href\s*=\s*['"]#main-content['"]/i.test(content);
  if (!skipLinkExists) {
    issues.push(buildIssue({
      rule: 'skip-link',
      severity: 'warning',
      message: 'Missing skip link',
      detail: 'Add a skip link so keyboard users can jump to the main content.',
      selector: 'body',
      fixable: true,
      patch: {
        kind: 'insert-skip-link'
      }
    }));
  }

  const imgMatches = content.match(/<img\b[^>]*>/gi) || [];
  const imgWithoutAlt = imgMatches.filter((img) => !/\balt\s*=\s*['"][^'"]*['"]/i.test(img));
  if (imgWithoutAlt.length > 0) {
    issues.push(buildIssue({
      rule: 'image-alt',
      severity: 'warning',
      message: `${imgWithoutAlt.length} image(s) missing alt`,
      detail: 'Decorative images should use alt=""; meaningful images should describe content.',
      selector: 'img',
      fixable: true,
      patch: {
        kind: 'add-alt-to-images'
      }
    }));
  }

  const buttonMatches = content.match(/<button\b[^>]*>[^<]*<\/button>|<button\b[^>]*>[\s\S]*?<\/button>/gi) || [];
  const iconOnlyButtons = buttonMatches.filter((button) => !hasAccessibleName(button));
  if (iconOnlyButtons.length > 0) {
    issues.push(buildIssue({
      rule: 'button-name',
      severity: 'error',
      message: `${iconOnlyButtons.length} button(s) lack an accessible name`,
      detail: 'Buttons need visible text or aria-label/title.',
      selector: 'button',
      fixable: true,
      patch: {
        kind: 'button-label-hint'
      }
    }));
  }

  const inputMatches = content.match(/<input\b[^>]*>/gi) || [];
  const unlabeledInputs = inputMatches.filter((input) => {
    const typeMatch = /\btype\s*=\s*['"]?([^'"\s>]+)/i.exec(input);
    const type = typeMatch ? typeMatch[1].toLowerCase() : 'text';
    if (type === 'hidden' || type === 'checkbox' || type === 'radio' || type === 'submit' || type === 'button' || type === 'file') {
      return false;
    }

    const idMatch = /\bid\s*=\s*['"]([^'"]+)['"]/i.exec(input);
    const ariaLabel = /aria-label\s*=\s*['"][^'"]+['"]/i.test(input) || /aria-labelledby\s*=\s*['"][^'"]+['"]/i.test(input);
    if (ariaLabel) return false;
    if (!idMatch) return true;
    const labelRegex = new RegExp(`<label[^>]*for\s*=\s*['"]${idMatch[1]}['"][^>]*>`, 'i');
    return !labelRegex.test(content);
  });
  if (unlabeledInputs.length > 0) {
    issues.push(buildIssue({
      rule: 'form-label',
      severity: 'error',
      message: `${unlabeledInputs.length} form field(s) missing labels`,
      detail: 'Every form control should have a visible label or an aria-label.',
      selector: 'input, textarea, select',
      fixable: true,
      patch: {
        kind: 'label-hint'
      }
    }));
  }

  const headingMatches = content.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) || [];
  const emptyHeadings = headingMatches.filter((heading) => stripTags(heading).length === 0);
  if (emptyHeadings.length > 0) {
    issues.push(buildIssue({
      rule: 'empty-heading',
      severity: 'error',
      message: `${emptyHeadings.length} empty heading(s)`,
      detail: 'Headings should contain descriptive text.',
      selector: 'h1, h2, h3, h4, h5, h6',
      fixable: false
    }));
  }

  const dialogButtons = countMatches(/<button\b/gi, content);
  if (dialogButtons === 0 && /modal|dialog/i.test(content)) {
    issues.push(buildIssue({
      rule: 'dialog-activation',
      severity: 'warning',
      message: 'Modal/dialog page has no visible button trigger',
      detail: 'Interactive dialogs should provide a keyboard reachable trigger.',
      selector: 'body',
      fixable: false
    }));
  }

  const score = Math.max(0, 100 - (issues.filter((issue) => issue.severity === 'error').length * 12) - (issues.filter((issue) => issue.severity === 'warning').length * 4));

  return {
    path: rel,
    absolutePath: filePath,
    score,
    errorCount: issues.filter((issue) => issue.severity === 'error').length,
    warningCount: issues.filter((issue) => issue.severity === 'warning').length,
    fixableCount: issues.filter((issue) => issue.fixable).length,
    issues,
    fixes
  };
}

function generateReport(pages) {
  const totals = pages.reduce((acc, page) => {
    acc.pages += 1;
    acc.errors += page.errorCount;
    acc.warnings += page.warningCount;
    acc.fixable += page.fixableCount;
    acc.score += page.score;
    if (page.errorCount === 0) acc.passed += 1;
    return acc;
  }, { pages: 0, errors: 0, warnings: 0, fixable: 0, score: 0, passed: 0 });

  return {
    generatedAt: new Date().toISOString(),
    totals: {
      ...totals,
      averageScore: totals.pages > 0 ? Number((totals.score / totals.pages).toFixed(2)) : 0,
      passRate: totals.pages > 0 ? Number(((totals.passed / totals.pages) * 100).toFixed(2)) : 0
    },
    pages: pages.sort((a, b) => a.score - b.score)
  };
}

function buildFixes(report) {
  const fixes = [];

  for (const page of report.pages) {
    for (const issue of page.issues) {
      if (!issue.fixable || !issue.patch) continue;
      fixes.push({
        path: page.path,
        rule: issue.rule,
        severity: issue.severity,
        message: issue.message,
        patch: issue.patch
      });
    }
  }

  return fixes;
}

function renderRemediationMarkdown(report) {
  let md = '# Accessibility Audit & Remediation Report\n\n';
  md += `Generated: ${report.generatedAt}\n\n`;
  md += '## Summary\n\n';
  md += `- Pages scanned: ${report.totals.pages}\n`;
  md += `- Pass rate: ${report.totals.passRate}%\n`;
  md += `- Average score: ${report.totals.averageScore}/100\n`;
  md += `- Errors: ${report.totals.errors}\n`;
  md += `- Warnings: ${report.totals.warnings}\n`;
  md += `- Fixable issues: ${report.totals.fixable}\n\n`;

  md += '## Top Issues\n\n';
  for (const page of report.pages.slice(0, 10)) {
    md += `### ${page.path}\n\n`;
    md += `- Score: ${page.score}/100\n`;
    md += `- Errors: ${page.errorCount}\n`;
    md += `- Warnings: ${page.warningCount}\n`;
    md += `- Fixable: ${page.fixableCount}\n`;
    page.issues.forEach((issue) => {
      md += `  - [${issue.severity}] ${issue.rule}: ${issue.message}\n`;
    });
    md += '\n';
  }

  md += '## Recommended Remediations\n\n';
  md += '- Add `lang` on every `<html>` element\n';
  md += '- Provide a `<main>` landmark and skip link\n';
  md += '- Add accessible names to icon-only buttons\n';
  md += '- Label all form controls\n';
  md += '- Use `alt=""` for decorative images\n';

  return md;
}

function renderDashboard(report) {
  const topPages = report.pages.slice(0, 12).map((page) => {
    const issues = page.issues.slice(0, 4).map((issue) => `<li><strong>${issue.rule}</strong> (${issue.severity}) - ${issue.message}</li>`).join('');
    return `
      <article class="page-card ${page.errorCount > 0 ? 'page-card--warn' : ''}">
        <header>
          <h3>${page.path}</h3>
          <div class="score">${page.score}/100</div>
        </header>
        <p>${page.errorCount} error(s), ${page.warningCount} warning(s), ${page.fixableCount} fixable</p>
        <ul>${issues}</ul>
      </article>
    `;
  }).join('');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Accessibility Audit & Remediation Dashboard</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #0f172a;
      --panel: #111827;
      --panel-2: #1f2937;
      --text: #e5e7eb;
      --muted: #94a3b8;
      --accent: #38bdf8;
      --warn: #f59e0b;
      --error: #ef4444;
      --ok: #22c55e;
      font-family: Inter, Arial, sans-serif;
    }
    body { margin: 0; background: linear-gradient(180deg, #020617, #0f172a 40%, #111827); color: var(--text); }
    .wrap { max-width: 1200px; margin: 0 auto; padding: 32px 20px 64px; }
    h1, h2, h3 { margin: 0; }
    .hero { background: rgba(17, 24, 39, 0.72); border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 24px; padding: 28px; box-shadow: 0 24px 80px rgba(0,0,0,.3); }
    .hero p { color: var(--muted); max-width: 68ch; }
    .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 14px; margin-top: 20px; }
    .metric { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(148, 163, 184, 0.15); border-radius: 18px; padding: 16px; }
    .metric .label { color: var(--muted); font-size: .82rem; }
    .metric .value { font-size: 2rem; font-weight: 800; margin-top: 6px; }
    .sections { display: grid; grid-template-columns: 1.2fr .8fr; gap: 20px; margin-top: 24px; }
    .panel { background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(148, 163, 184, 0.15); border-radius: 22px; padding: 20px; }
    .panel h2 { margin-bottom: 14px; font-size: 1.1rem; }
    .page-grid { display: grid; gap: 14px; }
    .page-card { background: rgba(31, 41, 55, 0.76); border: 1px solid rgba(148, 163, 184, 0.14); border-radius: 18px; padding: 16px; }
    .page-card--warn { border-color: rgba(245, 158, 11, 0.35); }
    .page-card header { display: flex; justify-content: space-between; gap: 10px; align-items: start; margin-bottom: 8px; }
    .page-card h3 { font-size: .98rem; }
    .score { color: var(--accent); font-weight: 800; }
    ul { margin: 10px 0 0 18px; color: var(--muted); }
    li { margin: 6px 0; }
    .chips { display: flex; flex-wrap: wrap; gap: 10px; }
    .chip { padding: 10px 12px; border-radius: 999px; background: rgba(255,255,255,0.06); border: 1px solid rgba(148,163,184,0.15); }
    .chip strong { display: block; font-size: 1.15rem; }
    .fix-list { display: grid; gap: 10px; }
    .fix-item { border-left: 3px solid var(--warn); padding: 10px 12px; background: rgba(245, 158, 11, 0.08); border-radius: 12px; }
    .fix-item small { color: var(--muted); display: block; margin-top: 4px; }
    @media (max-width: 900px) { .sections { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <h1>Accessibility Audit & Remediation</h1>
      <p>Scans HTML pages for common accessibility issues, prioritizes remediation, and highlights safe auto-fix opportunities.</p>
      <div class="metrics">
        <div class="metric"><div class="label">Pages</div><div class="value">${report.totals.pages}</div></div>
        <div class="metric"><div class="label">Pass Rate</div><div class="value">${report.totals.passRate}%</div></div>
        <div class="metric"><div class="label">Average Score</div><div class="value">${report.totals.averageScore}</div></div>
        <div class="metric"><div class="label">Errors</div><div class="value">${report.totals.errors}</div></div>
        <div class="metric"><div class="label">Warnings</div><div class="value">${report.totals.warnings}</div></div>
        <div class="metric"><div class="label">Fixable</div><div class="value">${report.totals.fixable}</div></div>
      </div>
    </section>

    <div class="sections">
      <section class="panel">
        <h2>Top Pages</h2>
        <div class="page-grid">${topPages}</div>
      </section>
      <aside class="panel">
        <h2>Auto-Remediation Plan</h2>
        <div class="chips">
          <div class="chip"><strong>${report.totals.fixable}</strong> fixable issues</div>
          <div class="chip"><strong>${report.pages.filter((page) => page.errorCount === 0).length}</strong> clean pages</div>
          <div class="chip"><strong>${report.pages.filter((page) => page.score === 100).length}</strong> perfect pages</div>
        </div>
        <div style="height: 18px"></div>
        <div class="fix-list">
          ${buildFixes(report).slice(0, 12).map((fix) => `<div class="fix-item"><strong>${fix.rule}</strong> on ${fix.path}<small>${fix.message}</small></div>`).join('') || '<p style="color: var(--muted)">No fixable issues found.</p>'}
        </div>
      </aside>
    </div>
  </div>
</body>
</html>`;
}

function applyFixes(fixes, rootDir = DEFAULT_ROOT) {
  const grouped = new Map();

  for (const fix of fixes) {
    if (!grouped.has(fix.path)) grouped.set(fix.path, []);
    grouped.get(fix.path).push(fix);
  }

  for (const [relPath, fileFixes] of grouped.entries()) {
    const absolutePath = path.join(rootDir, relPath);
    let content = readText(absolutePath);
    let changed = false;

    for (const fix of fileFixes) {
      if (fix.patch.kind === 'html-attribute' && fix.patch.selector === 'html') {
        if (!/<html[^>]*\blang\s*=\s*['"][^'"]+['"]/i.test(content)) {
          content = content.replace(/<html([^>]*)>/i, `<html$1 lang="${fix.patch.value}">`);
          changed = true;
        }
      }

      if (fix.patch.kind === 'insert-skip-link') {
        if (!/skip-link/i.test(content)) {
          const skipLink = '  <a class="skip-link" href="#main-content">Skip to main content</a>\n';
          content = content.replace(/<body([^>]*)>/i, `<body$1>\n${skipLink}`);
          changed = true;
        }
      }

      if (fix.patch.kind === 'add-alt-to-images') {
        content = content.replace(/<img(?![^>]*\balt\s*=)([^>]*?)>/gi, '<img$1 alt="">');
        changed = true;
      }

      if (fix.patch.kind === 'button-label-hint') {
        // Add a lightweight note for authoring remediation. Do not guess a label.
        if (!content.includes('data-a11y-remediation="button-label-needed"')) {
          content = content.replace(/<button(?![^>]*data-a11y-remediation)([^>]*?)>/i, '<button$1 data-a11y-remediation="button-label-needed">');
          changed = true;
        }
      }

      if (fix.patch.kind === 'label-hint') {
        if (!content.includes('data-a11y-remediation="label-needed"')) {
          content = content.replace(/<input(?![^>]*data-a11y-remediation)([^>]*?)>/i, '<input$1 data-a11y-remediation="label-needed">');
          changed = true;
        }
      }
    }

    if (changed) {
      fs.writeFileSync(absolutePath, content, 'utf8');
    }
  }
}

function run(options = {}) {
  const rootDir = options.rootDir || DEFAULT_ROOT;
  const htmlFiles = walk(rootDir, [], options);
  const pages = htmlFiles.map((filePath) => analyzeFile(filePath, { rootDir }));
  const report = generateReport(pages);
  const fixes = buildFixes(report);

  const outputDir = path.join(rootDir, 'reports', 'a11y');
  fs.mkdirSync(outputDir, { recursive: true });
  const reportPath = path.join(outputDir, 'audit-remediation-report.json');
  const markdownPath = path.join(outputDir, 'audit-remediation-report.md');
  const dashboardPath = path.join(rootDir, 'public', 'a11y-remediation-dashboard.html');

  ensureDir(reportPath);
  ensureDir(dashboardPath);
  fs.writeFileSync(reportPath, JSON.stringify({ ...report, fixes }, null, 2) + '\n', 'utf8');
  fs.writeFileSync(markdownPath, renderRemediationMarkdown(report), 'utf8');
  fs.writeFileSync(dashboardPath, renderDashboard(report), 'utf8');

  if (options.apply) {
    applyFixes(fixes, rootDir);
  }

  return { report, fixes, reportPath, markdownPath, dashboardPath };
}

module.exports = {
  walk,
  analyzeFile,
  generateReport,
  buildFixes,
  renderRemediationMarkdown,
  renderDashboard,
  applyFixes,
  run
};
