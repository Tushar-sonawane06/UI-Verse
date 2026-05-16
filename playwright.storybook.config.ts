import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/storybook',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: 'http://127.0.0.1:6006',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run storybook -- --port 6006 --no-open',
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: false,
    timeout: 180_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
