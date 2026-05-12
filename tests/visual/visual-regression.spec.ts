import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for UIverse
 * Tests key pages and components across desktop and mobile breakpoints
 */

// Helper to wait for animations to settle
async function waitForAnimationSettlement(page) {
  await page.evaluate(() => {
    return new Promise(resolve => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
  });
  await page.waitForTimeout(500);
}

test.describe('Visual Regression Tests - Homepage', () => {
  test('index page - desktop', async ({ page }) => {
    await page.goto('/');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('index-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('index page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('index-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});

test.describe('Visual Regression Tests - Components', () => {
  test('buttons page - desktop', async ({ page }) => {
    await page.goto('/button.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('buttons-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('buttons page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/button.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('buttons-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('cards page - desktop', async ({ page }) => {
    await page.goto('/cards.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('cards-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('cards page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/cards.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('cards-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('badges page - desktop', async ({ page }) => {
    await page.goto('/badges.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('badges-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('badges page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/badges.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('badges-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('form page - desktop', async ({ page }) => {
    await page.goto('/form.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('form-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('form page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/form.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('form-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('alerts page - desktop', async ({ page }) => {
    await page.goto('/alerts.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('alerts-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('alerts page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/alerts.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('alerts-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('toggles page - desktop', async ({ page }) => {
    await page.goto('/toggles.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('toggles-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('toggles page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/toggles.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('toggles-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});

test.describe('Visual Regression Tests - Advanced Pages', () => {
  test('pricing page - desktop', async ({ page }) => {
    await page.goto('/pricing.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('pricing-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('pricing page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/pricing.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('pricing-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('testimonials page - desktop', async ({ page }) => {
    await page.goto('/testimonials.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('testimonials-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('testimonials page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/testimonials.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('testimonials-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('loaders page - desktop (no animations)', async ({ page }) => {
    await page.goto('/loaders.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('loaders-page-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('loaders page - mobile (no animations)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/loaders.html');
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('loaders-page-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});

test.describe('Visual Regression Tests - Dark Mode', () => {
  test('index page dark mode - desktop', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    });
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('index-dark-mode-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('buttons page dark mode - desktop', async ({ page }) => {
    await page.goto('/button.html');
    await page.evaluate(() => {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    });
    await waitForAnimationSettlement(page);
    await expect(page).toHaveScreenshot('buttons-dark-mode-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});
