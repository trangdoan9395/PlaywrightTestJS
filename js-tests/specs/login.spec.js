import{test, expect} from '@playwright/test';
import  LoginPage  from '../pages/LoginPage.js';

test("Login Test", async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillCredentials("Admin", "admin123");
    await loginPage.submit();
    await expect(loginPage).toBeTruthy();
});
