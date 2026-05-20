import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/webcomponents',
  timeout: 60000,
  expect: { timeout: 30000 },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:8000',
    trace: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ],
  webServer: {
    command: 'node ./scripts/start-static-server.js',
    url: 'http://localhost:8000',
    reuseExistingServer: false,
  },
});
