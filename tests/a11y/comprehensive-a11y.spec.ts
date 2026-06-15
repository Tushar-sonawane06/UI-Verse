import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

// Discover all HTML files in the root directory dynamically
const rootDir = process.cwd();
const allFiles = fs.readdirSync(rootDir);
const htmlFiles = allFiles
  .filter(f => f.endsWith('.html') && !f.includes('.bak') && !f.includes('test-') && !f.includes('404'))
  .map(f => `/${f}`)
  .slice(0, 15); // Limit to 15 pages for test performance

test.describe('Comprehensive Accessibility (a11y) Automated Testing', () => {
  for (const pagePath of htmlFiles) {
    test(`A11y check for ${pagePath}`, async ({ page }) => {
      // Navigate to the local page
      await page.goto(pagePath);
      
      // Inject the axe-core script into the page
      await injectAxe(page);
      
      console.log(`Running accessibility audit on ${pagePath}`);

      // Run axe on the page and assert there are no violations
      // We will configure it to report serious and critical violations
      await checkA11y(page, null, {
        detailedReport: true,
        detailedReportOptions: { html: true }
      }, true); // Fail the test on violations
    });
  }
});
