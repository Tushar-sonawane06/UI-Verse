module.exports = {
  testDir: './tests/performance',
  timeout: 60000,
  expect: {
    timeout: 30000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'reports/performance-analysis/test-results.json' }],
    ['list'],
  ],
  use: {
    baseURL: 'file://',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...require('@playwright/test').chromium },
    },
  ],
};
