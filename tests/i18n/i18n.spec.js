const { test, expect } = require('@playwright/test');

test.describe('I18n System', () => {
  test('loads default language and switches to Spanish', async ({ page }) => {
    await page.goto('/components/I18n/demo-i18n.html');
    // Wait for I18n to initialize and translation to apply
    await page.waitForFunction(() => document.querySelector('h1')?.textContent.trim().length > 0);

    const enText = await page.textContent('h1');
    expect(enText).toBe('Welcome');

    // Change language to Spanish using the switcher
    await page.selectOption('uv-language-switcher select', 'es');
    // Wait for change to apply
    await page.waitForFunction(() => document.querySelector('h1')?.textContent.trim() === 'Bienvenido');
    const esText = await page.textContent('h1');
    expect(esText).toBe('Bienvenido');

    // Verify button text
    const btnText = await page.textContent('#demoBtn');
    expect(btnText).toBe('Haz clic');
  });
});
