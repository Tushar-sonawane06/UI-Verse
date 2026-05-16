#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const budgets = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'perf-budgets.json'), 'utf8'));

function listHtmlFiles(root) {
  return fs.readdirSync(root).filter(f => f.endsWith('.html'));
}

async function measurePage(filePath) {
  const url = 'file://' + path.resolve(filePath);
  const browser = await chromium.launch();
  const context = await browser.newContext();
  let totalBytes = 0;

  context.on('response', async (res) => {
    try {
      const h = res.headers();
      if (h && h['content-length']) {
        totalBytes += parseInt(h['content-length'], 10) || 0;
      } else {
        const buf = await res.body().catch(() => null);
        if (buf) totalBytes += buf.length;
      }
    } catch (e) {
      // ignore
    }
  });

  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });

  const metrics = await page.evaluate(() => new Promise((resolve) => {
    const result = { lcp: 0, cls: 0, fcp: 0 };
    try {
      const po = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          result.lcp = Math.max(result.lcp, entry.renderTime || entry.loadTime || 0);
        }
      });
      po.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {}

    try {
      let clsTotal = 0;
      const po2 = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) clsTotal += entry.value;
        }
        result.cls = clsTotal;
      });
      po2.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {}

    try {
      const fcp = performance.getEntriesByType('paint').find(p => p.name === 'first-contentful-paint');
      result.fcp = fcp ? fcp.startTime : 0;
    } catch (e) {}

    // wait a little for late entries
    setTimeout(() => {
      resolve(result);
    }, 3500);
  }));

  await browser.close();
  return { metrics, totalBytes };
}

async function run() {
  const root = process.cwd();
  const files = listHtmlFiles(root);
  if (!files.length) {
    console.log('No HTML files found.');
    process.exit(0);
  }

  const failures = [];

  for (const f of files) {
    process.stdout.write(`Measuring ${f} ... `);
    try {
      const { metrics, totalBytes } = await measurePage(f);
      const totalKb = Math.round(totalBytes / 1024);
      const lcp = Math.round(metrics.lcp);
      const cls = Number(metrics.cls.toFixed(3));

      let ok = true;
      const reports = [];
      reports.push(`LCP: ${lcp}ms (budget ${budgets.lcpMs}ms)`);
      reports.push(`CLS: ${cls} (budget ${budgets.cls})`);
      reports.push(`Total KB: ${totalKb}KB (budget ${budgets.totalKb}KB)`);

      if (lcp > budgets.lcpMs) { ok = false; reports.push('⚠️ LCP budget exceeded'); }
      if (cls > budgets.cls) { ok = false; reports.push('⚠️ CLS budget exceeded'); }
      if (totalKb > budgets.totalKb) { ok = false; reports.push('⚠️ Total page size budget exceeded'); }

      if (!ok) failures.push({ file: f, lcp, cls, totalKb, reports });

      console.log('done');
      console.log(reports.join(' | '));
    } catch (e) {
      console.log('error');
      console.error('Measurement error for', f, e && e.message);
      failures.push({ file: f, error: e && e.message });
    }
  }

  if (failures.length) {
    console.error('\nPerformance budget failures:');
    failures.forEach((fail) => {
      console.error('-', fail.file, fail.error ? `ERROR: ${fail.error}` : `LCP=${fail.lcp}ms CLS=${fail.cls} totalKB=${fail.totalKb}KB`);
      if (fail.reports) fail.reports.forEach(r => console.error('   ', r));
    });
    process.exit(2);
  }

  console.log('\nAll pages within budgets.');
  process.exit(0);
}

run().catch((err) => { console.error('Fatal', err); process.exit(3); });
