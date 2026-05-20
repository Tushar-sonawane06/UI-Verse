const { test, expect } = require('@playwright/test');

test.describe('Dependency Analyzer Dashboard', () => {
  test('loads and shows dependency metrics', async ({ page }) => {
    // Ensure report exists before opening dashboard
    await page.goto('/dependency-dashboard.html');

    // Wait for dashboard to load content
    await page.waitForSelector('#content', { state: 'visible' });

    // Validate key metrics are rendered
    await expect(page.locator('#componentCount')).toBeVisible();
    await expect(page.locator('#importCount')).toBeVisible();

    const componentCount = await page.locator('#componentCount').textContent();
    const importCount = await page.locator('#importCount').textContent();

    expect(Number(componentCount)).toBeGreaterThanOrEqual(0);
    expect(Number(importCount)).toBeGreaterThanOrEqual(0);
  });
});
