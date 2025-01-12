import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where your tests are stored
  timeout: 50000,     // Maximum time one test can run in milliseconds
  retries: 1,         // Retry failing tests once
  globalSetup: './tests/global-setup.ts', // Path to global setup file
  use: {
    baseURL: 'https://www.saucedemo.com/', // Base URL for all tests
    storageState: 'storageState.json', // Path to storage state file
    //testIdAttribute: 'data-testid', // Use data-testid attribute for selectors
    //testIdAttribute: 'data-test', // Use data-test attribute for selectors
    headless: true,   // Run tests in headless mode
    browserName: 'chromium', // Default browser to use
    viewport: { width: 1280, height: 720 }, // Default viewport size
  },
  reporter: [['list'], ['html']], // Use list and HTML reporters
});