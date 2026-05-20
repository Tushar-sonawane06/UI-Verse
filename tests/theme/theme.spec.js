const { test, expect } = require('@playwright/test');

test.describe('Design Tokens Theme Management', () => {
  test('applies a theme, persists it, and updates tokens', async ({ page }) => {
    await page.goto('/components/Theme/demo-theme.html');
    await page.waitForFunction(() => !!window.DesignTokens);

    const switcher = page.locator('uv-theme-switcher select');
    await expect(switcher).toBeVisible();

    await switcher.selectOption('dark');
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark');

    const theme = await page.evaluate(() => document.documentElement.dataset.theme);
    const stored = await page.evaluate(() => localStorage.getItem('ui-verse-theme'));
    const accent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim());
    const background = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim());

    expect(theme).toBe('dark');
    expect(stored).toBe('dark');
    expect(accent).toBe('#ff8a5b');
    expect(background).toBe('#0f0f12');
  });

  test('restores stored theme on reload', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('ui-verse-theme', 'ocean'));
    await page.goto('/components/Theme/demo-theme.html');
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'ocean');

    const resolved = await page.evaluate(() => localStorage.getItem('theme'));
    const accent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim());

    expect(resolved).toBe('ocean');
    expect(accent).toBe('#38bdf8');
  });
});
