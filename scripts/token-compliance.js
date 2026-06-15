const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const ROOT = process.cwd();
const DESIGN_TOKENS_PATH = path.join(ROOT, 'design-tokens.css');
const REPORT_DIR = path.join(ROOT, 'reports', 'tokens');
const EXCLUDED_DIRS = new Set(['node_modules', '.git', 'tests', 'playwright-report', 'reports', 'dist', '.github']);

const TOKEN_CATEGORIES = {
  color: ['color', 'background', 'background-color', 'border', 'border-color', 'border-top', 'border-right', 'border-bottom', 'border-left', 'outline', 'outline-color', 'fill', 'stroke', 'box-shadow', 'text-shadow'],
  spacing: ['margin', 'padding', 'gap', 'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height', 'top', 'right', 'bottom', 'left', 'inset'],
  typography: ['font-size', 'font-family', 'font-weight', 'line-height', 'letter-spacing', 'text-transform'],
  radius: ['border-radius']
};

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name)) walk(path.join(dir, entry.name), files);
    } else if (entry.isFile() && entry.name.endsWith('.css')) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function extractTokens(cssText) {
  const root = postcss.parse(cssText);
  const tokenNames = new Set();
  root.walkDecls(decl => {
    if (decl.prop.startsWith('--')) tokenNames.add(decl.prop);
  });
  return tokenNames;
}

function categorizeProperty(prop) {
  for (const [cat, props] of Object.entries(TOKEN_CATEGORIES)) {
    if (props.some(p => prop === p || prop.startsWith(p + '-'))) return cat;
  }
  return null;
}

function isTokenUsage(value, tokenNames) {
  for (const name of tokenNames) {
    if (value.includes(`var(${name})`) || value.includes(`var(${name},`)) return true;
  }
  return false;
}

function containsHardcodedColor(value) {
  return /#([0-9a-f]{3,4}|[0-9a-f]{6,8})/i.test(value) ||
         /rgb(a?)\s*\(/i.test(value) ||
         /hsl(a?)\s*\(/i.test(value);
}

function analyzeFile(filePath, tokenNames) {
  const rel = path.relative(ROOT, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');
  const root = postcss.parse(content);

  let totalDeclarations = 0;
  let tokenUsages = 0;
  const hardcoded = [];
  const violations = [];

  root.walkDecls(decl => {
    const cat = categorizeProperty(decl.prop);
    if (!cat) return;

    totalDeclarations++;
    if (isTokenUsage(decl.value, tokenNames)) {
      tokenUsages++;
    } else {
      hardcoded.push({
        property: decl.prop,
        value: decl.value,
        line: decl.source?.start?.line || 0,
        category: cat
      });

      if (cat === 'color' && containsHardcodedColor(decl.value)) {
        violations.push({
          property: decl.prop,
          value: decl.value,
          line: decl.source?.start?.line || 0,
          message: `Hardcoded color ${decl.value} must use design token`
        });
      }
    }
  });

  const score = totalDeclarations > 0 ? Math.round((tokenUsages / totalDeclarations) * 100) : 100;

  return {
    path: rel,
    totalDeclarations,
    tokenUsages,
    score,
    hardcoded,
    violations,
    pass: score >= 80 && violations.length === 0
  };
}

function getChangedFiles() {
  const args = process.argv.slice(2);
  if (args.includes('--all')) return null;

  try {
    const { execSync } = require('child_process');
    const base = args.includes('--base') ? args[args.indexOf('--base') + 1] : 'origin/main';
    const output = execSync(`git diff --name-only ${base}...HEAD`, { encoding: 'utf8', cwd: ROOT });
    const files = output.split('\n').filter(f => f.endsWith('.css'));
    if (files.length > 0) return files;
  } catch (e) {
    // ignore
  }

  return null;
}

function main() {
  if (!fs.existsSync(DESIGN_TOKENS_PATH)) {
    console.error('design-tokens.css not found');
    process.exit(1);
  }

  const tokenNames = extractTokens(fs.readFileSync(DESIGN_TOKENS_PATH, 'utf8'));
  const changedFiles = getChangedFiles();

  let files;
  if (changedFiles) {
    files = changedFiles.map(f => path.join(ROOT, f)).filter(f => fs.existsSync(f));
    console.log(`Scanning ${files.length} changed CSS files...`);
  } else {
    files = walk(ROOT).filter(f => path.basename(f) !== 'design-tokens.css');
    console.log(`Scanning all ${files.length} CSS files...`);
  }

  const results = files.map(f => analyzeFile(f, tokenNames));
  const passed = results.filter(r => r.pass);
  const failed = results.filter(r => !r.pass);

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      total: results.length,
      passed: passed.length,
      failed: failed.length,
      averageScore: results.length > 0 ? Math.round(results.reduce((a, r) => a + r.score, 0) / results.length) : 0
    },
    components: results.sort((a, b) => a.score - b.score)
  };

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(path.join(REPORT_DIR, 'token-compliance.json'), JSON.stringify(report, null, 2) + '\n');

  let md = `# Design Token Compliance Report\n\n`;
  md += `Generated: ${report.generatedAt}\n\n`;
  md += `## Summary\n\n`;
  md += `- Components: ${report.summary.total}\n`;
  md += `- Passed: ${report.summary.passed}\n`;
  md += `- Failed: ${report.summary.failed}\n`;
  md += `- Average Score: ${report.summary.averageScore}%\n\n`;

  if (failed.length > 0) {
    md += `## Failures\n\n`;
    for (const comp of failed) {
      md += `### ${comp.path} — ${comp.score}%\n\n`;
      for (const v of comp.violations) {
        md += `- Line ${v.line}: \`${v.property}: ${v.value}\` — ${v.message}\n`;
      }
      for (const h of comp.hardcoded.slice(0, 5)) {
        if (!comp.violations.some(v => v.line === h.line && v.property === h.property)) {
          md += `- Line ${h.line}: \`${h.property}: ${h.value}\` (${h.category})\n`;
        }
      }
      md += '\n';
    }
  }

  fs.writeFileSync(path.join(REPORT_DIR, 'token-compliance.md'), md);

  console.log(`\nToken Compliance: ${report.summary.passed}/${report.summary.total} passed`);
  console.log(`Average score: ${report.summary.averageScore}%`);
  console.log(`Report: ${path.join(REPORT_DIR, 'token-compliance.json')}`);

  if (failed.length > 0) {
    console.error(`\n${failed.length} component(s) failed token compliance.`);
    process.exit(1);
  }

  console.log('All components pass token compliance.');
}

module.exports = { extractTokens, analyzeFile, categorizeProperty, isTokenUsage };

if (require.main === module) {
  main();
}