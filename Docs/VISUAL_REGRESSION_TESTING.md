# Visual Regression Testing Guide

## Overview

This project uses Playwright for automated visual regression testing to detect unintended UI changes across all HTML pages.

## Setup

### Local Testing

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps

# Run visual tests
npm run test:visual

# Run the focused core-page visual regression suite
npm run test:visual:core

# Update snapshots (after intentional UI changes)
npm run test:visual:update

# Run with UI (interactive mode)
npm run test:visual:ui
```

### CI Integration

The project includes GitHub Actions workflows for automated visual testing:

#### Option 1: Built-in Playwright (No external service required)
- Runs on all PRs and pushes to main
- Compares screenshots against stored snapshots
- Uploads test reports as artifacts

#### Option 2: Percy (Recommended for visual comparisons)
1. Get a Percy account at https://percy.io
2. Create a new project
3. Add `PERCY_TOKEN` to GitHub secrets
4. Percy will automatically capture and compare screenshots on PRs

#### Option 3: Chromatic (Storybook integration)
1. Get Chromatic account at https://www.chromatic.com
2. Create a project and get project token
3. Add `CHROMATIC_PROJECT_TOKEN` to GitHub secrets

## How It Works

- The visual regression test automatically discovers all HTML pages in the project
- Captures screenshots at two viewport sizes (desktop: 1280x800, mobile: 375x667)
- Compares new screenshots against baseline snapshots
- Fails if differences are detected

The focused core-page suite keeps a smaller baseline set for the main entry points:

- Home / showcase
- Buttons
- Navbar
- Cards

## Updating Snapshots

When you intentionally change UI:

```bash
npm run test:visual:update
```

Then commit the updated snapshot files.

## Test Configuration

- Desktop: 1280x800
- Mobile: 375x667 (Pixel 5)
- Animations disabled for consistent results
- Full page screenshots

## Troubleshooting

### Tests fail due to expected changes
Run `npm run test:visual:update` to update snapshots.

### Percy/Chroma not working
Ensure secrets are added to GitHub repository settings.

### Timeout errors
The webServer timeout may need adjustment for large projects.