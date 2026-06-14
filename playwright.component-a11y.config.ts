import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/a11y',
  timeout: 60000,
  expect: { timeout: 30000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [['list']],
  use: {
    trace: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } }
  ]
});