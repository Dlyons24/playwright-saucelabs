import {test,expect} from '@playwright/test'; 
import { FullConfig } from '@playwright/test';
//import { before } from 'node:test';


test("Add one item to the cart", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    const shoppingCartBadge = await page.locator('[data-test="shopping-cart-badge"]');
    await expect(shoppingCartBadge).toBeVisible();
    await expect(shoppingCartBadge).toHaveText('1');
    await shoppingCartBadge.click();
    await page.getByRole("button", { name: "checkout" }).click();
    const checkoutInfo = await page.locator('[data-test="title"]');
    await expect(checkoutInfo).toBeVisible();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Morris');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill("JonesTest");
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill("30316");
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.getByAltText("Pony Express").click();
    const thankYouBadge = await page.locator('[data-test="complete-header"]');
    await expect(thankYouBadge).toBeVisible();
    await expect(thankYouBadge).toHaveText('Thank you for your order!');
    await page.locator('[data-test="back-to-products"]').click();

});


  