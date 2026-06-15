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

test.describe('Dark Mode Custom Switcher Demo', () => {
  test('toggle checkbox switches between light and dark modes', async ({ page }) => {
    await page.goto('/darkmode/mode.html');
    await page.waitForFunction(() => !!window.DesignTokens);

    const checkbox = page.locator('#toggle');
    await expect(checkbox).toBeAttached();
    await expect(page.locator('.toggle-label')).toBeVisible();

    // Default should be light mode (unchecked)
    const isCheckedInit = await checkbox.isChecked();
    expect(isCheckedInit).toBe(false);
    expect(await page.evaluate(() => document.documentElement.dataset.theme)).toBe('light');

    // Click checkbox to turn on dark mode
    await page.locator('.toggle-label').click();
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark');
    
    expect(await checkbox.isChecked()).toBe(true);
    expect(await page.evaluate(() => localStorage.getItem('ui-verse-theme'))).toBe('dark');
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim())).toBe('#ff8a5b');

    // Click again to turn back on light mode
    await page.locator('.toggle-label').click();
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'light');
    expect(await checkbox.isChecked()).toBe(false);
    expect(await page.evaluate(() => localStorage.getItem('ui-verse-theme'))).toBe('light');
  });

  test('syncs checkbox toggle with the uv-theme-switcher select element', async ({ page }) => {
    await page.goto('/darkmode/mode.html');
    await page.waitForFunction(() => !!window.DesignTokens);

    const checkbox = page.locator('#toggle');
    const select = page.locator('uv-theme-switcher select');
    await expect(select).toBeVisible();

    // Select dark mode in web component dropdown
    await select.selectOption('dark');
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark');

    // Toggle should be checked automatically
    expect(await checkbox.isChecked()).toBe(true);

    // Select light mode
    await select.selectOption('light');
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'light');

    // Toggle should be unchecked
    expect(await checkbox.isChecked()).toBe(false);
  });

  test('restores stored dark mode state in darkmode/mode.html on load', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('ui-verse-theme', 'dark'));
    await page.goto('/darkmode/mode.html');
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark');

    const checkbox = page.locator('#toggle');
    expect(await checkbox.isChecked()).toBe(true);
  });
});
