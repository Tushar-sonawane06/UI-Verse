const { test, expect } = require('@playwright/test');

test.describe('Component Discovery System', () => {
  test('searches and filters components by query, category, and quality', async ({ page }) => {
    await page.goto('/components/Discovery/component-discovery.html');
    await page.waitForFunction(() => !!window.ComponentDiscovery && window.ComponentDiscovery.getAll().length > 0);

    const allCount = await page.locator('#matchCount').textContent();
    expect(Number(allCount)).toBeGreaterThan(0);

    await page.fill('#searchBox', 'button');
    await page.waitForTimeout(200);
    const buttonCards = page.locator('#results .card');
    await expect(buttonCards.first()).toBeVisible();

    await page.locator('#categoryChips .chip').filter({ hasText: 'Buttons' }).click();
    await page.waitForTimeout(200);
    const countAfterCategory = Number(await page.locator('#resultCount').textContent());
    expect(countAfterCategory).toBeGreaterThan(0);

    await page.locator('#hasDocs').check();
    await page.locator('#minScore').evaluate((el) => {
      el.value = '80';
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await page.waitForTimeout(200);
    const scores = await page.locator('#results .card .score').allTextContents();
    expect(scores.length).toBeGreaterThan(0);
    scores.forEach((score) => {
      expect(Number(score.replace('/100', ''))).toBeGreaterThanOrEqual(80);
    });
  });
});
