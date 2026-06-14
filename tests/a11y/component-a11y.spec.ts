import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'reports', 'a11y');
const EXCLUDED_DIRS = new Set(['node_modules', '.git', 'tests', 'playwright-report', 'reports', 'dist']);

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

test.describe('Component A11y Audit', () => {
  for (const filePath of testFiles) {
    const relPath = path.relative(ROOT, filePath);
    const route = `file://${filePath}`;

    test(`a11y: ${relPath}`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'networkidle' });

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      const safeName = relPath.replace(/[\\/]/g, '_').replace('.html', '.json');
      const report = {
        path: relPath,
        url: route,
        timestamp: new Date().toISOString(),
        violations: results.violations,
        incomplete: results.incomplete,
        passes: results.passes.length,
        score: results.violations.length === 0 ? 100 : Math.max(0, 100 - results.violations.length * 10)
      };

      fs.mkdirSync(REPORT_DIR, { recursive: true });
      fs.writeFileSync(path.join(REPORT_DIR, `a11y-${safeName}`), JSON.stringify(report, null, 2));

      expect(results.violations, `Accessibility violations in ${relPath}: ${results.violations.map((v: any) => v.description).join(', ')}`).toHaveLength(0);
    });
  }
});