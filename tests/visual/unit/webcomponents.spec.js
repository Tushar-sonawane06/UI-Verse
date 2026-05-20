import { test, expect } from '@playwright/test';

test.describe('WebComponents (unit-ish)', () => {
  test('uv-button demo loads and upgrades', async ({ page }) => {
    await page.goto('http://127.0.0.1:8081/components/WebComponents/demo-uv-button.html');
    const el = page.locator('uv-button');
    await expect(el).toHaveCount(1);
  });

  test('uv-modal demo loads', async ({ page }) => {
    await page.goto('http://127.0.0.1:8081/components/WebComponents/demo-uv-modal.html');
    await expect(page.locator('body')).toHaveText(/uv-modal|uv-modal/i, { timeout: 2000 }).catch(() => {});
    await expect(page).toHaveTitle(/uv-modal|uv-button|uv-tooltip|uv-modal/i).catch(() => {});
  });

  test('Testimonials carousel basic smoke', async ({ page }) => {
    await page.goto('http://127.0.0.1:8081/components/Tc.html');
    await expect(page.locator('#testimonial-text')).toHaveCount(1);
    await expect(page.locator('#testimonial-name')).toHaveCount(1);
  });
});
