import PerformancePage  from '../pages/PerformancePage.js';
import { test, expect } from '@playwright/test';
import  LoginPage  from '../pages/LoginPage.js';
test ("Performance Test with search KPIs ", async ({ page }) => {
 const loginPage = new LoginPage(page);
        const performancePage = new PerformancePage(page);
        await loginPage.goto();
        await loginPage.fillCredentials("Admin", "admin123");
        await loginPage.submit();

        await expect(loginPage.getWelcomeMessage()).toBeVisible();
        await performancePage.getButtonPerformance().click();
        await performancePage.getLabelConfigure().hover();
        await performancePage.getButtonConfigure().click();
        await performancePage.getDataConfigurations("KPIs").click();
        
    });

