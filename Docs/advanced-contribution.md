# Advanced Contribution Guide

Welcome to the advanced contributor handbook. This document describes the step-by-step checklist to propose premium components, optimize style dependencies, and write UI regression test cases.

## Checklist for Premium Components
To ensure new layouts qualify as premium assets, verify:
- **Theme-adaptability**: Must automatically respect dark mode variables (`--bg-color`, `--text-color`).
- **Interactive States**: Hover, focus, active, and disabled classes must have clear transition animations.
- **Performance Budget**: Check your stylesheet size against budgets. Avoid giant base64 image strings.

## Writing Playwright Test Cases
If creating a novel component category, write a matching test case:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Custom Element visual checks', () => {
  test('default layout matches snapshot', async ({ page }) => {
    await page.goto('/my-component.html');
    await expect(page).toHaveScreenshot('my-component-baseline.png');
  });
});
```
