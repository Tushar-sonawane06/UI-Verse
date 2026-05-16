const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

// Load budgets config
const budgetsPath = path.resolve(process.cwd(), 'performance-budgets.json');
const defaultBudgets = {
  maxTotalRequests: 60,
  maxTotalBytes: 600 * 1024, // 600 KB
  maxJsBytes: 250 * 1024,
  maxCssBytes: 150 * 1024,
  maxImageBytes: 400 * 1024,
  maxLoadTimeMs: 3000
};

let budgets = { default: defaultBudgets, components: {} };
if (fs.existsSync(budgetsPath)) {
  try {
    const parsed = JSON.parse(fs.readFileSync(budgetsPath, 'utf8'));
    budgets.default = Object.assign({}, defaultBudgets, parsed.default || parsed);
    budgets.components = parsed.components || {};
  } catch (e) {
    console.error('Failed to parse performance-budgets.json, using defaults', e.message);
  }
}

function collectHtmlPages(rootDir) {
  const results = [];
  const ignored = new Set(['node_modules', 'tests', 'playwright-report', '.git']);
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!ignored.has(entry.name)) walk(full);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.html')) results.push(full);
    }
  }
  walk(rootDir);
  return results.sort();
}

async function inspectPage(browser, route) {
  const context = await browser.newContext();
  const page = await context.newPage();

  let totalRequests = 0;
  let totalBytes = 0;
  let jsBytes = 0;
  let cssBytes = 0;
  let imageBytes = 0;

  page.on('response', async (response) => {
    totalRequests += 1;
    try {
      const headers = response.headers();
      let size = 0;
      if (headers['content-length']) {
        size = parseInt(headers['content-length'], 10) || 0;
      } else {
        try {
          const body = await response.body();
          size = body ? body.length : 0;
        } catch (e) {
          size = 0;
        }
      }
      totalBytes += size;
      const ct = (headers['content-type'] || '').toLowerCase();
      if (ct.includes('javascript') || response.url().endsWith('.js')) jsBytes += size;
      else if (ct.includes('css') || response.url().endsWith('.css')) cssBytes += size;
      else if (ct.startsWith('image/') || ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].some(ext => response.url().endsWith(ext))) imageBytes += size;
    } catch (err) {
      // ignore per-response errors
    }
  });

  const start = Date.now();
  await page.goto(route, { waitUntil: 'load', timeout: 60000 }).catch(() => {});
  const loadTime = Date.now() - start;

  // allow a short settle for lazy resources
  await page.waitForTimeout(300);

  await context.close();

  return { totalRequests, totalBytes, jsBytes, cssBytes, imageBytes, loadTime };
}

async function main() {
  const repoRoot = process.cwd();
  const pages = collectHtmlPages(repoRoot).filter(p => !p.includes('.backup'));
  if (pages.length === 0) {
    console.log('No .html pages found.');
    process.exit(0);
  }

  const generateBaseline = process.argv.includes('--generate-baseline') || process.argv.includes('-g');
  const observed = [];
  const perPageObserved = {};

  const browser = await chromium.launch();
  const failures = [];

  console.log(`Checking ${pages.length} HTML pages against budgets...`);

  for (const file of pages) {
    const rel = path.relative(repoRoot, file).replace(/\\/g, '/');
    const route = rel === 'index.html' ? `file://${file}` : `file://${file}`;
    process.stdout.write(`Inspecting ${rel} ... `);
    try {
      const metrics = await inspectPage(browser, route);
      observed.push(metrics);
      perPageObserved[rel] = metrics;

      // determine budgets for this page: per-component override or default
      const pageBudgets = budgets.components[rel] || budgets.default;
      const msgs = [];
      if (metrics.totalRequests > pageBudgets.maxTotalRequests) msgs.push(`requests ${metrics.totalRequests} > ${pageBudgets.maxTotalRequests}`);
      if (metrics.totalBytes > pageBudgets.maxTotalBytes) msgs.push(`totalBytes ${(metrics.totalBytes/1024|0)}KB > ${(pageBudgets.maxTotalBytes/1024|0)}KB`);
      if (metrics.jsBytes > pageBudgets.maxJsBytes) msgs.push(`js ${(metrics.jsBytes/1024|0)}KB > ${(pageBudgets.maxJsBytes/1024|0)}KB`);
      if (metrics.cssBytes > pageBudgets.maxCssBytes) msgs.push(`css ${(metrics.cssBytes/1024|0)}KB > ${(pageBudgets.maxCssBytes/1024|0)}KB`);
      if (metrics.imageBytes > pageBudgets.maxImageBytes) msgs.push(`images ${(metrics.imageBytes/1024|0)}KB > ${(pageBudgets.maxImageBytes/1024|0)}KB`);
      if (metrics.loadTime > pageBudgets.maxLoadTimeMs) msgs.push(`loadTime ${metrics.loadTime}ms > ${pageBudgets.maxLoadTimeMs}ms`);

      if (msgs.length) {
        failures.push({ page: rel, metrics, reasons: msgs });
        console.log('FAIL');
      } else {
        console.log('OK');
      }
    } catch (err) {
      console.log('ERR');
      failures.push({ page: rel, error: err.message });
    }
  }

  await browser.close();

  const generateComponents = process.argv.includes('--generate-components') || process.argv.includes('-C');
  if (generateComponents) {
    // compute per-page budgets and write them under 'components' key
    const componentsBudgets = {};
    for (const [rel, m] of Object.entries(perPageObserved)) {
      componentsBudgets[rel] = {
        maxTotalRequests: Math.ceil((m.totalRequests || 0) * 1.2) || budgets.default.maxTotalRequests,
        maxTotalBytes: Math.ceil((m.totalBytes || 0) * 1.2) || budgets.default.maxTotalBytes,
        maxJsBytes: Math.ceil((m.jsBytes || 0) * 1.2) || budgets.default.maxJsBytes,
        maxCssBytes: Math.ceil((m.cssBytes || 0) * 1.2) || budgets.default.maxCssBytes,
        maxImageBytes: Math.ceil((m.imageBytes || 0) * 1.2) || budgets.default.maxImageBytes,
        maxLoadTimeMs: Math.ceil((m.loadTime || 0) * 1.2) || budgets.default.maxLoadTimeMs
      };
    }

    const out = {
      default: budgets.default,
      components: componentsBudgets
    };
    fs.writeFileSync(budgetsPath, JSON.stringify(out, null, 2), 'utf8');
    console.log('\nWrote per-component budgets to performance-budgets.json');
    process.exit(0);
  }

  if (generateBaseline) {
    // compute maxima and write to performance-budgets.json
    const max = observed.reduce((acc, m) => {
      acc.totalRequests = Math.max(acc.totalRequests || 0, m.totalRequests || 0);
      acc.totalBytes = Math.max(acc.totalBytes || 0, m.totalBytes || 0);
      acc.jsBytes = Math.max(acc.jsBytes || 0, m.jsBytes || 0);
      acc.cssBytes = Math.max(acc.cssBytes || 0, m.cssBytes || 0);
      acc.imageBytes = Math.max(acc.imageBytes || 0, m.imageBytes || 0);
      acc.loadTime = Math.max(acc.loadTime || 0, m.loadTime || 0);
      return acc;
    }, {});
    const newBudgets = {
      maxTotalRequests: Math.ceil((max.totalRequests || 0) * 1.2) || budgets.maxTotalRequests,
      maxTotalBytes: Math.ceil((max.totalBytes || 0) * 1.2) || budgets.maxTotalBytes,
      maxJsBytes: Math.ceil((max.jsBytes || 0) * 1.2) || budgets.maxJsBytes,
      maxCssBytes: Math.ceil((max.cssBytes || 0) * 1.2) || budgets.maxCssBytes,
      maxImageBytes: Math.ceil((max.imageBytes || 0) * 1.2) || budgets.maxImageBytes,
      maxLoadTimeMs: Math.ceil((max.loadTime || 0) * 1.2) || budgets.maxLoadTimeMs
    };
    // write merged default + empty components mapping
    const out = { default: newBudgets, components: budgets.components || {} };
    fs.writeFileSync(budgetsPath, JSON.stringify(out, null, 2), 'utf8');
    console.log('\nWrote performance-budgets.json with generated baseline:');
    console.log(JSON.stringify(out, null, 2));
    process.exit(0);
  }

  if (failures.length) {
    console.log('\nPerformance budget violations:');
    for (const f of failures) {
      console.log(`- ${f.page}`);
      if (f.reasons) f.reasons.forEach(r => console.log(`   - ${r}`));
      if (f.error) console.log(`   - error: ${f.error}`);
    }
    process.exit(2);
  }

  console.log('\nAll pages satisfy the performance budgets.');
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(99);
});
