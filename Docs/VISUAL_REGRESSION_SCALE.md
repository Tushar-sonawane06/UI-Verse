# Advanced Visual Regression Testing at Scale

This feature adds a scalable visual regression pipeline for UI-Verse with partitioning, filtering, and summary reporting.

## What is included

- Dedicated Playwright config: `playwright.visual-scale.config.ts`
- Scalable visual test suite: `tests/visual-scale/visual-scale.spec.ts`
- Result summarizer: `scripts/visual-results-summary.js`
- Quick-run wrapper for local smoke runs: `scripts/run-visual-scale-quick.js`

## Scaling controls

Set these environment variables for large suites:

- `VISUAL_PROFILE=quick` uses a smaller project matrix (Chromium desktop only)
- `VISUAL_MAX_PAGES=20` limits number of routes under test
- `VISUAL_INCLUDE=button|card` includes routes matching regex
- `VISUAL_PARTITIONS=4` total partitions for CI fan-out
- `VISUAL_PARTITION_INDEX=0` partition index for current job

## Commands

```bash
npm run visual:scale
npm run visual:scale:quick
npm run visual:scale:update
npm run visual:scale:summary
```

## CI fan-out example

Run in parallel jobs:

- Job 1: `VISUAL_PARTITIONS=4 VISUAL_PARTITION_INDEX=0 npm run visual:scale`
- Job 2: `VISUAL_PARTITIONS=4 VISUAL_PARTITION_INDEX=1 npm run visual:scale`
- Job 3: `VISUAL_PARTITIONS=4 VISUAL_PARTITION_INDEX=2 npm run visual:scale`
- Job 4: `VISUAL_PARTITIONS=4 VISUAL_PARTITION_INDEX=3 npm run visual:scale`

Then combine and inspect reports in `reports/visual-scale`.
