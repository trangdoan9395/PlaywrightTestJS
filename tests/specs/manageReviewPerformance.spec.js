import PerformancePage  from '../pages/PerformancePage.js';
import ConfigurePerformance from '../pages/ConfigurePerformance.js';
import { test, expect } from '@playwright/test';
import  LoginPage  from '../pages/LoginPage.js';
import ManageReviewPage from '../pages/ManageReviewPerformancePage.js';
import { selectOptionDropdown } from '../../common/selectDropdown.js';


test ("Tracker Performance Test", async ({ page }) => {
 const performancePage = new PerformancePage(page);
 const manageReviewPage = new ManageReviewPage(page);
 const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillCredentials("Admin", "admin123");
        await loginPage.submit();
        await expect(loginPage.getWelcomeMessage()).toBeVisible();
        await performancePage.getButtonPerformance().click();
        await manageReviewPage.getButtonManageReview().hover();
        await manageReviewPage.getButtonManageReview().click();
        await manageReviewPage.getButtonSearchManageReview("Employee Reviews").click();
        await expect(manageReviewPage.getTitleHeader()).toBeVisible();
        await manageReviewPage.getInputEmployName().fill("John Doe");
        await manageReviewPage.getButtonSelectJobTitle("Job Title").click();
        await selectOptionDropdown(page, 'Automated test');
}
);