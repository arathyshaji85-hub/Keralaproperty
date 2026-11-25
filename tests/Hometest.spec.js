import { test, expect } from '@playwright/test';
import { Homepage } from '/Page/Homepage';

test('Home page verification', async ({ page }) => {

    const home = new kphomepage(page);

    // Open login page
    await page.goto('https://keralaproperty.in/member/login/');

    // Login
    await home.login('YOUR_USERNAME','YOUR_PASSWORD');

    // Verify logo
    await expect(home.logo).toBeVisible();
    console.log('Logo is displayed');

    // Verify My Properties text
    await expect(home.myProperties).toBeVisible();
    console.log('My Properties is visible');

    // Verify username
    await expect(home.profileName).toBeVisible();
    console.log('Username is displayed');

    // Click My Account
    await expect(home.myAccount).toBeVisible();
    await home.clickMyAccount();
    console.log('My Account clicked');

});
