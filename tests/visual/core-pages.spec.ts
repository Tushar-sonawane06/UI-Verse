import { test, expect } from '@playwright/test';

const corePages = [
  { route: '/', name: 'index' },
  { route: '/button.html', name: 'button' },
  { route: '/navbar.html', name: 'navbar' },
  { route: '/cards.html', name: 'cards' }
];

async function waitForAnimationSettlement(page) {
  await page.evaluate(() => new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  }));
  await page.waitForTimeout(400);
}

test.describe('Visual regression - core pages', () => {
  for (const pageDef of corePages) {
    test(`${pageDef.name} page`, async ({ page }) => {
      await page.goto(pageDef.route);
      await waitForAnimationSettlement(page);

      await expect(page).toHaveScreenshot(`${pageDef.name}.png`, {
        fullPage: true,
        animations: 'disabled',
        caret: 'hide',
        timeout: 15000
      });
    });
  }
});
