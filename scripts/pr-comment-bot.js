const fs = require('fs');
const path = require('path');

const ARTIFACTS_DIR = process.env.ARTIFACTS_DIR || 'artifacts';
const GITHUB_EVENT_PATH = process.env.GITHUB_EVENT_PATH;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function loadJson(...parts) {
  const filePath = path.join(...parts);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return null;
  }
}

function badge(label, status) {
  const color = status === 'pass' ? '22c55e' : status === 'fail' ? 'ef4444' : 'f59e0b';
  return `![${label}](https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(status)}-${color})`;
}

function buildComment() {
  const tokenReport = loadJson(ARTIFACTS_DIR, 'token-compliance-report', 'token-compliance.json');
  const perfReport = loadJson(ARTIFACTS_DIR, 'perf-component-report', 'perf-component-report.json');

  const visualDir = path.join(ARTIFACTS_DIR, 'visual-regression-report');
  let visualPass = true;
  if (fs.existsSync(visualDir)) {
    const files = fs.readdirSync(visualDir);
    visualPass = !files.some(f => f.includes('failed') || f.includes('failure'));
  }

  const a11yDir = path.join(ARTIFACTS_DIR, 'a11y-component-report');
  let a11yPass = true;
  if (fs.existsSync(a11yDir)) {
    const files = fs.readdirSync(a11yDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const report = loadJson(a11yDir, file);
      if (report && report.violations && report.violations.length > 0) {
        a11yPass = false;
        break;
      }
    }
  }

  const tokenPass = tokenReport ? tokenReport.summary.failed === 0 : true;
  const perfPass = perfReport ? (perfReport.css?.failed === 0 && perfReport.renderBlocking?.failed === 0) : true;

  let body = `## Design System Validator Report\n\n`;
  body += `${badge('Tokens', tokenPass ? 'pass' : 'fail')} `;
  body += `${badge('A11y', a11yPass ? 'pass' : 'fail')} `;
  body += `${badge('Visual', visualPass ? 'pass' : 'fail')} `;
  body += `${badge('Perf', perfPass ? 'pass' : 'fail')}\n\n`;

  body += `| Gate | Status | Details |\n`;
  body += `|------|--------|---------|\n`;
  body += `| Token Compliance | ${tokenPass ? '✅' : '❌'} | ${tokenReport ? `${tokenReport.summary.passed}/${tokenReport.summary.total} passed` : 'N/A'} |\n`;
  body += `| Accessibility | ${a11yPass ? '✅' : '❌'} | WCAG 2.1 AA |\n`;
  body += `| Visual Regression | ${visualPass ? '✅' : '❌'} | Pixel diff 0.1% |\n`;
  body += `| Performance | ${perfPass ? '✅' : '❌'} | ${perfReport ? `CSS < 5KB, no blocking scripts` : 'N/A'} |\n\n`;

  if (tokenReport && tokenReport.summary.failed > 0) {
    body += `### Token Failures\n\n`;
    for (const comp of tokenReport.components.filter(c => !c.pass)) {
      body += `- **${comp.path}** — ${comp.score}% compliant\n`;
      for (const v of comp.violations.slice(0, 3)) {
        body += `  - Line ${v.line}: \`${v.property}: ${v.value}\`\n`;
      }
    }
    body += '\n';
  }

  if (!a11yPass && fs.existsSync(a11yDir)) {
    body += `### Accessibility Failures\n\n`;
    const files = fs.readdirSync(a11yDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const report = loadJson(a11yDir, file);
      if (report && report.violations && report.violations.length > 0) {
        body += `- **${report.path}**\n`;
        for (const v of report.violations.slice(0, 3)) {
          body += `  - ${v.id}: ${v.description} (${v.impact})\n`;
        }
      }
    }
    body += '\n';
  }

  if (perfReport && (perfReport.css?.failed > 0 || perfReport.renderBlocking?.failed > 0)) {
    body += `### Performance Failures\n\n`;
    for (const f of perfReport.css?.details?.filter(d => !d.pass) || []) {
      body += `- **${f.path}**: ${(f.size / 1024).toFixed(2)}KB > 5KB limit\n`;
    }
    for (const f of perfReport.renderBlocking?.details?.filter(d => !d.pass) || []) {
      body += `- **${f.path}**: ${f.blockingScripts.length} render-blocking script(s) in <head>\n`;
    }
    body += '\n';
  }

  body += `---\n*Posted by Design System Validator*\n`;

  return body;
}

async function postComment(body) {
  if (!GITHUB_EVENT_PATH || !GITHUB_TOKEN) {
    console.log('Not running in GitHub Actions, printing comment:\n');
    console.log(body);
    return;
  }

  const event = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, 'utf8'));
  const prNumber = event.pull_request?.number;
  const repo = event.repository?.name;
  const owner = event.repository?.owner?.login;

  if (!prNumber || !repo || !owner) {
    console.log('Missing PR context');
    return;
  }

  const apiBase = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  const commentsRes = await fetch(`${apiBase}/issues/${prNumber}/comments`, { headers });
  const comments = await commentsRes.json();
  const botComment = comments.find(c => c.body?.includes('Design System Validator Report'));

  const method = botComment ? 'PATCH' : 'POST';
  const url = botComment ? `${apiBase}/issues/comments/${botComment.id}` : `${apiBase}/issues/${prNumber}/comments`;

  const res = await fetch(url, {
    method,
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ body })
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
  }

  console.log('PR comment posted/updated');
}

async function main() {
  const body = buildComment();
  await postComment(body);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});