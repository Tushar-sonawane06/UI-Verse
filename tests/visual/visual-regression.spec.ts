import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Helper to wait for animations to settle
async function waitForAnimationSettlement(page) {
  await page.evaluate(() => {
    return new Promise(resolve => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
  });
  await page.waitForTimeout(500);
}

// Discover all .html pages under the repo root (excluding tests and node_modules)
function collectHtmlPages(rootDir: string) {
  const results: string[] = [];
  const ignoredDirs = new Set(['node_modules', 'tests', 'tests-results', 'playwright-report']);

  function walk(dir: string) {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        if (!ignoredDirs.has(item.name)) walk(full);
        continue;
      }
      if (item.isFile() && item.name.endsWith('.html')) results.push(full);
    }
  }

  walk(rootDir);
  return results;
}

const repoRoot = path.resolve(__dirname, '..', '..');
const pages = collectHtmlPages(repoRoot)
  // Keep web-facing pages (exclude internal playground/test pages by simple heuristics)
  .filter(p => !p.includes('playwright') && !p.includes('.backup') && !p.toLowerCase().includes('test-'))
  // Sort for deterministic test ordering
  .sort();

const desktop = { width: 1280, height: 800 };
const mobile = { width: 375, height: 667 };

test.describe('Visual Regression - auto-generated for all HTML pages', () => {
  for (const file of pages) {
    const rel = path.relative(repoRoot, file).replace(/\\/g, '/');
    const route = rel === 'index.html' ? '/' : `/${rel}`;
    const name = rel.replace(/\//g, '-').replace(/\.html$/, '');

    test(`${route} — desktop`, async ({ page }) => {
      await page.setViewportSize(desktop);
      await page.goto(route);
      await waitForAnimationSettlement(page);
      await expect(page).toHaveScreenshot(`${name}-desktop.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });

    test(`${route} — mobile`, async ({ page }) => {
      await page.setViewportSize(mobile);
      await page.goto(route);
      await waitForAnimationSettlement(page);
      await expect(page).toHaveScreenshot(`${name}-mobile.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});
