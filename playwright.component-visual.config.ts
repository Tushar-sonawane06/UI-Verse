import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  timeout: 120000,
  expect: {
    timeout: 30000,
    toHaveScreenshot: {
      maxDiffPixels: 0,
      threshold: 0.1
    }
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [['list']],
  use: {
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } }
  ]
});