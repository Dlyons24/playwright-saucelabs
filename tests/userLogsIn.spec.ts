import {test,expect} from '@playwright/test';   
import { FullConfig } from '@playwright/test';

test("User logs in and then logs out", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole("button", { name: "Open Menu" }).click();
    const logout = await page.locator('[data-test="logout-sidebar-link"]');
    await expect(logout).toBeVisible();
    await logout.click();
    await page.waitForURL('https://www.saucedemo.com/');
});