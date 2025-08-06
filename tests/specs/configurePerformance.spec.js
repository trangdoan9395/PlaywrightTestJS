import PerformancePage  from '../pages/PerformancePage.js';
import ConfigurePerformance from '../pages/ConfigurePerformance.js';
import { test, expect } from '@playwright/test';
import  LoginPage  from '../pages/LoginPage.js';


test ("Configure Performance Test", async ({ page }) => {
 const loginPage = new LoginPage(page);
 const allJobTitles = [];
        const performancePage = new PerformancePage(page);
        const configurePerformance = new ConfigurePerformance(page);
        await loginPage.goto();
        await loginPage.fillCredentials("Admin", "admin123");
        await loginPage.submit();

        await expect(loginPage.getWelcomeMessage()).toBeVisible();
        await performancePage.getButtonPerformance().click();
        await performancePage.getLabelConfigure().hover();
        await performancePage.getButtonConfigure().click();
        await performancePage.getDataConfigurations("KPIs").click();
        await page.waitForSelector("//div[@class='oxd-table-body']//div[@role='row']");
        let hasNextPage = await configurePerformance.getButtonNext().isVisible();
        while (hasNextPage) {
            const currentTitle = await configurePerformance.getallJobTitles()
            allJobTitles.push(...currentTitle);
            // Log the number of job titles collected so far
            console.log("Total Job Titles Collected: ", allJobTitles.length);

            if (await configurePerformance.getButtonNext().isVisible()) {
                await configurePerformance.getButtonNext().click();
                await page.waitForLoadState('networkidle'); // Chờ trang tải lại
            } else {
                hasNextPage = false; // Thoát vòng lặp nếu nút "Next" bị vô hiệu hóa

            }
            
            

        }
        await page.waitForTimeout(1000); // Wait for the next page to load
        // Log the job titles collected so far

    console.log("All Job Titles: ", allJobTitles);
    const countTitles = await configurePerformance.getCountJobTitles().textContent()
    const numberString = countTitles.replace(")", "").split("(")[1];

    const number = parseInt(numberString, 10);
    console.log("Number of Job Titles: ", number);
    expect(allJobTitles.length).toEqual(number);

});


