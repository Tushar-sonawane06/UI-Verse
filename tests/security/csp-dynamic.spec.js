const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');

const ROOT = path.resolve(__dirname, '../..');
const SKIP_DIRS = new Set(['.git', 'node_modules', 'playwright-report', 'test-results', 'generated-images', 'coverage', 'dist', '.storybook', 'storybook-static']);

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) {
        continue;
      }
      walk(path.join(dir, entry.name), results);
      continue;
    }

    if (entry.name.toLowerCase().endsWith('.html')) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

test.describe('Content Security Policy Dynamic Verification', () => {
  test.use({ bypassCSP: false });

  const htmlFiles = walk(ROOT);

  for (const htmlFile of htmlFiles) {
    const relativePath = path.relative(ROOT, htmlFile).split(path.sep).join('/');

    // Skip testing if file doesn't have a CSP meta tag
    const content = fs.readFileSync(htmlFile, 'utf8');
    if (!/<meta\s+http-equiv=["']Content-Security-Policy["']/i.test(content)) {
      continue;
    }

    test(`Verify CSP on ${relativePath}`, async ({ page }) => {
      const violations = [];
      const consoleErrors = [];

      // Hook up violation listener
      await page.exposeFunction('reportCSPViolation', (v) => {
        violations.push(v);
      });

      await page.addInitScript(() => {
        document.addEventListener('securitypolicyviolation', (e) => {
          window.reportCSPViolation({
            blockedURI: e.blockedURI,
            violatedDirective: e.violatedDirective,
            sample: e.sample
          });
        });
      });

      page.on('console', (msg) => {
        const text = msg.text();
        if (msg.type() === 'error' && (text.includes('Content Security Policy') || text.includes('CSP'))) {
          consoleErrors.push(text);
        }
      });

      // Navigate using local base URL (configured in playwright.security.config.ts)
      const url = `/${relativePath}`;
      await page.goto(url, { waitUntil: 'load', timeout: 10000 });

      // Special action: if page is test-security-csp.html, click buttons to trigger handlers
      if (relativePath.includes('test-security-csp.html')) {
        const buttons = await page.locator('button').all();
        for (const btn of buttons) {
          try {
            await btn.click({ timeout: 200 });
          } catch (e) {}
        }
      }

      await page.waitForTimeout(300);

      // Assertions
      if (violations.length > 0) {
        console.error(`Detected violations on ${relativePath}:`, violations);
      }
      if (consoleErrors.length > 0) {
        console.error(`Detected console errors on ${relativePath}:`, consoleErrors);
      }

      expect(violations).toEqual([]);
      expect(consoleErrors).toEqual([]);
    });
  }
});
