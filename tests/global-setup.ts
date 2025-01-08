// global-setup.ts
import { FullConfig, chromium } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use; // If you have a baseURL in your config
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseURL || 'https://www.saucedemo.com/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  // Wait for navigation or an element to appear
  await page.waitForURL(/inventory\.html/);

  // Save the storage state to a file
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;
