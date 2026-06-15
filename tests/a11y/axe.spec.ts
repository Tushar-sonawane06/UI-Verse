import { test, expect } from '@playwright/test';
import { injectAxe } from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

const pages = [
  '/index.html',
  '/components/index.html',
  '/darkmode/mode.html',
  '/ai-components.html',
  '/alerts.html'
];

test.describe('Axe accessibility checks (representative pages)', () => {
  for (const p of pages) {
    test(p, async ({ page }, testInfo) => {
      await page.goto(p);
      await injectAxe(page);

      // Run axe in page context and capture results
      const results = await page.evaluate(async () => await (window as any).axe.run());

      // ensure output directory exists and write JSON report
      const outDir = path.join(process.cwd(), 'tests-results');
      await fs.promises.mkdir(outDir, { recursive: true });
      const safeName = p.replace(/[^a-z0-9_.-]/gi, '_');
      const outPath = path.join(outDir, `a11y-${safeName}.json`);
      await fs.promises.writeFile(outPath, JSON.stringify(results, null, 2), 'utf8');

      // Log summary for CI output
      const violationCount = results.violations ? results.violations.length : 0;
      console.log(`${p} — axe violations: ${violationCount}`);

      // Fail test if any violations detected
      expect(violationCount).toBe(0);
    });
  }
});
