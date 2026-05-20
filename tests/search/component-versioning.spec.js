const { test, expect } = require('@playwright/test');

test.describe('Component Versioning', () => {
  test('resolves exact versions and fallbacks', async ({ page }) => {
    await page.goto('/components/Discovery/component-discovery.html');
    await page.waitForFunction(() => !!window.ComponentDiscovery && window.ComponentDiscovery.getAll().length > 0);

    // exact match by id
    const exact = await page.evaluate(() => window.ComponentDiscovery.resolve('button@0.1.0'));
    expect(exact.found).toBeTruthy();
    expect(exact.version).toBeDefined();

    // request a non-existent patch but same major -> fallback
    const fallback = await page.evaluate(() => window.ComponentDiscovery.resolve('button@0.2.5'));
    expect(fallback.found).toBeTruthy();
    expect(fallback.compatibility.fallbackUsed).toBeTruthy();

    // missing component
    const miss = await page.evaluate(() => window.ComponentDiscovery.resolve('nonexistent@1.0.0'));
    expect(miss.found).toBeFalsy();
  });
});