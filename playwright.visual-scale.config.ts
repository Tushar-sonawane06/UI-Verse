import { defineConfig, devices } from '@playwright/test';

const ci = !!process.env.CI;
const quick = process.env.VISUAL_PROFILE === 'quick';

function buildProjects() {
  if (quick) {
    return [{ name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } }];
  }

  return [
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'chromium-mobile', use: { ...devices['Pixel 5'] } },
    { name: 'firefox-desktop', use: { ...devices['Desktop Firefox'] } }
  ];
}

export default defineConfig({
  testDir: './tests/visual-scale',
  timeout: 90_000,
  expect: {
    timeout: 30_000,
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixelRatio: 0.02
    }
  },
  fullyParallel: true,
  forbidOnly: ci,
  retries: ci ? 1 : 0,
  workers: ci ? 2 : undefined,
  reporter: [
    ['html', { open: 'never', outputFolder: 'reports/visual-scale/html-report' }],
    ['json', { outputFile: 'reports/visual-scale/results.json' }],
    ['list']
  ],
  use: {
    baseURL: 'http://localhost:8000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: buildProjects(),
  webServer: {
    command: 'node ./scripts/start-static-server.js',
    url: 'http://localhost:8000',
    reuseExistingServer: !ci
  }
});
