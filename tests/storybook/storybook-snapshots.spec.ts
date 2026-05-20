import { test, expect } from '@playwright/test';

test.describe('Storybook snapshots', () => {
  test('animation library story', async ({ page }) => {
    await page.goto('/iframe.html?id=motion-animation-library--default');
    await expect(page.locator('body')).toHaveScreenshot('animation-library-story.png', {
      fullPage: true,
    });
  });

  test('testimonials carousel story', async ({ page }) => {
    await page.goto('/iframe.html?id=components-testimonials-carousel--default');
    await expect(page.locator('body')).toHaveScreenshot('testimonials-carousel-story.png', {
      fullPage: true,
    });
  });
});
