import PerformancePage  from '../pages/PerformancePage.js';
import ConfigurePerformance from '../pages/ConfigurePerformance.js';
import { test, expect } from '@playwright/test';
import  LoginPage  from '../pages/LoginPage.js';
test ("Tracker Performance Test", async ({ page }) =>{
 const configurePerformance = new ConfigurePerformance(page);
 const performancePage = new PerformancePage(page);
    const allJobTitles = [];
    const allJobAfterSearch = [];
    const dataFilter = "manda user";
    const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.fillCredentials("Admin", "admin123");
            await loginPage.submit();
    
            await expect(loginPage.getWelcomeMessage()).toBeVisible();

        await performancePage.getButtonPerformance().click();
        await performancePage.getLabelConfigure().hover();
        await performancePage.getButtonConfigure().click();
        await performancePage.getDataConfigurations("Trackers").click();
        await page.waitForTimeout(1000);
        await configurePerformance.getInputPerformancetracker().click;
        await configurePerformance.getInputPerformancetracker().fill(dataFilter);
        await page.waitForTimeout(1000);
        await page.waitForSelector("//div[@class='oxd-table-card']/div[@role='row']");
        let hasNextPage = await configurePerformance.getButtonNext().isVisible();
        while (hasNextPage) {
            const currentTitle = await configurePerformance.getallJobTitles()
            allJobTitles.push(...currentTitle);
            // Log the number of job titles collected so far
            console.log("Total Job Titles Collected: ", allJobTitles.length);
             }
            if(allJobTitles.includes(dataFilter)){
                        await configurePerformance.getButtonSearch().click();
                        const filteredTitles = await configurePerformance.getallJobTitles();
                        allJobAfterSearch.push(...filteredTitles);
                        expect(allJobAfterSearch).toContain(dataFilter);
                        console.log("Filtered Job Titles: ", allJobAfterSearch);

                
            }else {
                await configurePerformance.getButtonSearch().click();
                expect(await configurePerformance.getTextInvalidMessage()).toEqual("Invalid");

            if (await configurePerformance.getButtonNext().isVisible()) {
                await configurePerformance.getButtonNext().click();
                await page.waitForLoadState('networkidle'); // Chờ trang tải lại
            } else {
                hasNextPage = false; // Thoát vòng lặp nếu nút "Next" bị vô hiệu hóa

           
            
             

        }



        

    }
});


