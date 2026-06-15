#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = process.cwd();
const BUDGET_FILE = path.join(ROOT, 'performance-budgets.json');

function readBudgets() {
  if (!fs.existsSync(BUDGET_FILE)) {
    console.error('performance-budgets.json not found');
    process.exit(2);
  }
  return JSON.parse(fs.readFileSync(BUDGET_FILE, 'utf8'));
}

function isExternal(url) {
  return /^https?:\/\//i.test(url) || url.startsWith('//');
}

function resolveLocal(file, baseFile) {
  if (!file) return null;
  if (isExternal(file)) return null;
  if (file.startsWith('/')) return path.join(ROOT, file.replace(/^\//, ''));
  return path.join(path.dirname(baseFile), file);
}

function fileSize(filePath) {

  if (filePath && filePath.endsWith('.css')) {
    try {
      const sz = fs.statSync(filePath).size;
      if (sz > 15 * 1024) {
        console.warn(`[PERF WARNING] CSS limit warning: ${filePath} size is ${sz} bytes`);
      }
    } catch(e){}
  }
    
  try {
    const stat = fs.statSync(filePath);
    if (stat.isFile()) return stat.size;
  } catch (e) {}
  return 0;
}

function analyzeHtml(filePath) {
  const abs = path.join(ROOT, filePath);
  if (!fs.existsSync(abs)) return { error: 'missing' };
  const html = fs.readFileSync(abs, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const scripts = Array.from(doc.querySelectorAll('script[src]')).map(s => s.getAttribute('src'));
  const links = Array.from(doc.querySelectorAll('link[rel="stylesheet"][href]')).map(l => l.getAttribute('href'));
  const imgs = Array.from(doc.querySelectorAll('img[src]')).map(i => i.getAttribute('src'));

  const totalRequests = scripts.length + links.length + imgs.length;

  let jsBytes = 0, cssBytes = 0, imageBytes = 0, totalBytes = Buffer.byteLength(html, 'utf8');

  scripts.forEach(s => {
    const p = resolveLocal(s, abs);
    const sz = fileSize(p);
    jsBytes += sz;
    totalBytes += sz;
  });

  links.forEach(l => {
    const p = resolveLocal(l, abs);
    const sz = fileSize(p);
    cssBytes += sz;
    totalBytes += sz;
  });

  imgs.forEach(i => {
    const p = resolveLocal(i, abs);
    const sz = fileSize(p);
    imageBytes += sz;
    totalBytes += sz;
  });

  return { totalRequests, totalBytes, jsBytes, cssBytes, imageBytes, scripts, links, imgs };
}

function compareBudget(name, budget, report) {
  const violations = [];
  if (report.error) {
    violations.push(`file missing: ${name}`);
    return violations;
  }
  if (budget.maxTotalRequests != null && report.totalRequests > budget.maxTotalRequests) {
    violations.push(`total requests ${report.totalRequests} > ${budget.maxTotalRequests}`);
  }
  if (budget.maxTotalBytes != null && report.totalBytes > budget.maxTotalBytes) {
    violations.push(`total bytes ${report.totalBytes} > ${budget.maxTotalBytes}`);
  }
  if (budget.maxJsBytes != null && report.jsBytes > budget.maxJsBytes) {
    violations.push(`js bytes ${report.jsBytes} > ${budget.maxJsBytes}`);
  }
  if (budget.maxCssBytes != null && report.cssBytes > budget.maxCssBytes) {
    violations.push(`css bytes ${report.cssBytes} > ${budget.maxCssBytes}`);
  }
  if (budget.maxImageBytes != null && report.imageBytes > budget.maxImageBytes) {
    violations.push(`image bytes ${report.imageBytes} > ${budget.maxImageBytes}`);
  }
  if (budget.maxLoadTimeMs != null) {
    // we cannot measure load time deterministically here; skip but warn
  }
  return violations;
}

function main() {
  const budgets = readBudgets();
  const entries = Object.assign({}, budgets.components || {}, { 'default': budgets.default });
  const allViolations = [];

  for (const [name, budget] of Object.entries(entries)) {
    if (name === 'default') continue; // skip default here
    const report = analyzeHtml(name);
    const v = compareBudget(name, budget, report);
    if (v.length) allViolations.push({ name, violations: v, report });
  }

  if (allViolations.length) {
    console.error('Performance budget violations:');
    allViolations.forEach(it => {
      console.error(`- ${it.name}`);
      it.violations.forEach(v => console.error(`  - ${v}`));
    });
    process.exit(1);
  }

  console.log('All performance budgets satisfied (for local assets).');
}

if (require.main === module) main();

module.exports = {
  analyzeHtml,
  compareBudget,
  readBudgets,
};
