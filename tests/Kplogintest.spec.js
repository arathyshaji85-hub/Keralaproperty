import { kphomepage } from "../page/kphomepage";
import { test, expect } from "@playwright/test";

let login;

test.beforeEach("url loading", async ({ page }) => {
    await page.goto(process.env.BASEURL);
    login = new kphomepage(page);
});

test.only("valid login", async ({ page }) => {

    await login.setValues(process.env.KP_Username,process.env.KP_Password);
    await login.loginClick();

});

test("invalid login", async ({ page }) => {

    await login.setValues("arat@gmail.com", "ai@12");
    await login.loginClick();

    await expect(page).toHaveURL("https://keralaproperty.in/member/login/");
})

    test("visibility of logo",async()=>{
   await expect(login.logo).toBeVisible();
})
test('navigate to home',async({page})=>{
    await login.logoclick();

})

//npx playwright test Kplogintest.spec.js --headed --project=chromium