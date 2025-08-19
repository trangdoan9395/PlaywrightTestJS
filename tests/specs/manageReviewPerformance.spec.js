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
        await selectOptionDropdown(page, 'Automaton Tester');
        await manageReviewPage.getButtonSelectJobTitle("Sub Unit").click();
        await selectOptionDropdown(page, 'TechOps');
        await manageReviewPage.getButtonSelectJobTitle("Include").click();
        await selectOptionDropdown(page, 'Current Employees Only');
        await manageReviewPage.getButtonSelectJobTitle("Review Status").click();
        await selectOptionDropdown(page, 'Completed');
        await manageReviewPage.getInputDate("From Date").fill("2023-01-01");
        await manageReviewPage.getInputDate("To Date").fill("2023-12-31");
        await manageReviewPage.getButtonSearch().click();



}
);