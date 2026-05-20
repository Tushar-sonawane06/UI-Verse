import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

type VisualTarget = {
  route: string;
  name: string;
};

const repoRoot = path.resolve(__dirname, '..', '..');
const ignoredDirs = new Set([
  '.git',
  '.github',
  'node_modules',
  'tests',
  'test-results',
  'playwright-report',
  'reports'
]);

const desktop = { width: 1440, height: 900 };
const mobile = { width: 390, height: 844 };

function waitForVisualStability(page: any) {
  return page.evaluate(() => {
    const style = document.createElement('style');
    style.setAttribute('data-visual-freeze', 'true');
    style.textContent = `
      *, *::before, *::after {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        caret-color: transparent !important;
      }
    `;
    document.head.appendChild(style);

    return new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });
  });
}

function collectHtmlFiles(rootDir: string): string[] {
  const files: string[] = [];

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!ignoredDirs.has(entry.name)) walk(full);
        continue;
      }
      if (!entry.name.endsWith('.html')) continue;
      if (entry.name.toLowerCase().startsWith('test-')) continue;
      if (entry.name.endsWith('.backup')) continue;
      files.push(full);
    }
  }

  walk(rootDir);
  return files;
}

function createTargets(): VisualTarget[] {
  const includePattern = process.env.VISUAL_INCLUDE;
  const maxPages = Number(process.env.VISUAL_MAX_PAGES || '0');
  const partitions = Math.max(1, Number(process.env.VISUAL_PARTITIONS || '1'));
  const index = Math.max(0, Number(process.env.VISUAL_PARTITION_INDEX || '0'));

  const htmlFiles = collectHtmlFiles(repoRoot)
    .map((absPath) => path.relative(repoRoot, absPath).replace(/\\/g, '/'))
    .sort();

  let routes = htmlFiles.map((rel) => ({
    route: rel === 'index.html' ? '/' : `/${rel}`,
    name: rel.replace(/\.html$/i, '').replace(/\//g, '-')
  }));

  if (includePattern) {
    const regex = new RegExp(includePattern, 'i');
    routes = routes.filter((target) => regex.test(target.route) || regex.test(target.name));
  }

  if (partitions > 1) {
    routes = routes.filter((_, i) => i % partitions === index);
  }

  if (maxPages > 0) {
    routes = routes.slice(0, maxPages);
  }

  return routes;
}

const targets = createTargets();

test.describe('Visual Regression at Scale', () => {
  test.skip(targets.length === 0, 'No visual targets matched current filters.');

  for (const target of targets) {
    test(`capture ${target.route}`, async ({ page, isMobile }) => {
      await page.setViewportSize(isMobile ? mobile : desktop);
      await page.goto(target.route, { waitUntil: 'domcontentloaded' });
      await waitForVisualStability(page);
      await page.waitForTimeout(150);

      const viewportTag = isMobile ? 'mobile' : 'desktop';
      await expect(page).toHaveScreenshot(`${target.name}-${viewportTag}.png`, {
        fullPage: true
      });
    });
  }
});
