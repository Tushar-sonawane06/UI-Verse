# Visual Regression Testing Guide

## Overview

UIverse uses **Playwright** for visual regression testing. Visual tests detect unintended UI changes across desktop and mobile breakpoints by comparing snapshots.

## Running Tests Locally

### Initial Setup

```bash
npm install
npx playwright install
```

### Run All Visual Tests

```bash
npm run test:visual
```

### Run Tests in UI Mode (Interactive)

```bash
npm run test:visual:ui
```

This opens an interactive test viewer where you can:
- Step through each test
- Inspect elements
- Compare snapshots
- Debug failures

### Update Baseline Snapshots

When you intentionally change UI, update baselines:

```bash
npm run test:visual:update
```

**Important:** Only run this after visually verifying your changes are correct.

### Debug Tests

```bash
npm run test:visual:debug
```

Opens Inspector for step-by-step debugging.

## How Snapshots Work

1. **First Run**: Tests create baseline snapshots in `tests/visual/__screenshots__/`.
2. **Subsequent Runs**: Tests compare current page to baseline.
3. **Diff on Mismatch**: If screenshots don't match, Playwright creates a diff image.
4. **CI Failure**: Mismatches fail CI until approved (baselines updated or code reverted).

## Test Coverage

Current tests cover:

- **Homepage**: Desktop + Mobile
- **Component Pages**: Buttons, Cards, Badges, Forms, Alerts, Toggles
- **Advanced Pages**: Pricing, Testimonials, Loaders
- **Dark Mode**: Index + Buttons in dark theme
- **Breakpoints**: Desktop (1920px), Mobile (375px), Firefox
- **Browsers**: Chromium, Firefox

**Total: 22+ snapshot scenarios** across multiple breakpoints and themes.

## Snapshot Stabilization

Tests use these strategies to ensure deterministic snapshots:

```typescript
// Disable animations (fonts, transitions rendered as static)
animations: 'disabled'

// Wait for render cycles
await page.waitForTimeout(500);

// Reset viewport for each test
await page.setViewportSize({ width: 375, height: 667 });
```

This ensures fonts load consistently and animations don't flicker between runs.

## CI Behavior

On GitHub:
1. Tests run on every PR and push to `main`.
2. Snapshots are **compared** (not updated) in CI.
3. If mismatch detected:
   - CI fails
   - Artifact `playwright-report/` uploaded
   - Download report from Actions tab to inspect diff

### Updating Baselines on CI

If change is intentional:

1. **Locally**: Update baselines with `npm run test:visual:update`
2. **Commit**: Add `tests/visual/__screenshots__/` to git
3. **Push**: CI will pass (baselines now match)

Or via GitHub UI after merge (not recommended for main).

## Workflow for Contributors

1. **Make UI changes**
2. **Run tests locally**: `npm run test:visual`
3. **If failing**: Review diff in UI mode `npm run test:visual:ui`
4. **If intentional**: Update baselines `npm run test:visual:update` + commit
5. **If unintended**: Debug and fix CSS/HTML
6. **Push PR**: CI runs tests automatically

## Troubleshooting

### Tests Pass Locally but Fail in CI

- Font rendering differs on Linux (CI) vs Windows/Mac
- Solution: CI uses Ubuntu fonts; ensure page is responsive to font changes

### "Snapshot mismatch" but looks the same

- Small differences: rounding, anti-aliasing
- Playwright highlights actual vs expected; inspect diff

### Want to skip a test

```typescript
test.skip('slow test', async ({ page }) => {
  // This test is skipped
});
```

### Tests timeout

- Increase timeout in `playwright.config.ts`:
  ```typescript
  use: { actionTimeout: 5000 }
  ```

## File Structure

```
tests/
  visual/
    visual-regression.spec.ts     (test file)
    __screenshots__/              (baseline snapshots - auto-generated)
      index-desktop.png
      buttons-mobile.png
      etc.
playwright.config.ts             (Playwright configuration)
```

## Next Steps

- More pages can be added to `visual-regression.spec.ts`
- Custom snapshot thresholds for pixel-perfect comparisons
- Accessibility screenshot audits (axe integration)
- Performance metrics collection
