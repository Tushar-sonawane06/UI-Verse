import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const EXCLUDED_DIRS = new Set(['node_modules', '.git', 'tests', 'playwright-report', 'reports', 'dist']);

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

function getChangedHtmlFiles(): string[] | null {
  try {
    const { execSync } = require('child_process');
    const output = execSync('git diff --name-only origin/main...HEAD', { encoding: 'utf8', cwd: ROOT });
    const files = output.split('\n').filter((f: string) => f.endsWith('.html'));
    if (files.length > 0) return files.map((f: string) => path.join(ROOT, f));
  } catch (e) {
    // ignore
  }
  return null;
}

function getAllHtmlFiles(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name)) getAllHtmlFiles(path.join(dir, entry.name), files);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const testFiles = getChangedHtmlFiles() || getAllHtmlFiles(ROOT);

test.describe('Component Visual Regression', () => {
  for (const filePath of testFiles) {
    const relPath = path.relative(ROOT, filePath);
    const route = `file://${filePath}`;

    for (const viewport of VIEWPORTS) {
      test(`screenshot: ${relPath} @ ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(route, { waitUntil: 'networkidle' });
        await page.waitForTimeout(500);

        const safeName = relPath.replace(/[\\/]/g, '-').replace('.html', '');
        await expect(page).toHaveScreenshot(`${safeName}-${viewport.name}.png`, {
          maxDiffPixels: Math.ceil(viewport.width * viewport.height * 0.001),
          threshold: 0.1
        });
      });
    }
  }
});