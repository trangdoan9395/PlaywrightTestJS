import PerformancePage  from '../pages/PerformancePage.js';
import { test, expect } from '@playwright/test';
import  LoginPage  from '../pages/LoginPage.js';
import MyInfoPage  from '../pages/MyInfoPage';


test ("Test My info ", async ({ page }) => {
 const loginPage = new LoginPage(page);
        const myInfoPage = new MyInfoPage(page);
        await loginPage.goto();
        await loginPage.fillCredentials("Admin", "admin123");
        await loginPage.submit();
        myInfoPage.getButtonMyInfo().click();
        myInfoPage.getInputEmployFirstName().fill("John");
        myInfoPage.getInputEmployMiddleName().fill("Doe");
        myInfoPage.getInputEmployLastName().fill("Smith");
        myInfoPage.getInputEmployID().fill("12345");
        myInfoPage.getInputOtherID().fill("67890");
        myInfoPage.getInputLicenseNumber().fill("A1234567");
        myInfoPage.getInputDate().fill("12/31/2025");
        myInfoPage.getInputDateOfBirth().fill("01/01/1990");

});