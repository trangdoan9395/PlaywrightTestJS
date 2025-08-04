import{test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage} from '../pages/Dashboard.js';

test("Dashboard Test", async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.fillCredentials("Admin", "admin123");
    await loginPage.submit();
 await expect(dashboardPage.getLabelsTimedashboard()).toBeVisible();
    await expect(dashboardPage.getLabelsActions()).toBeVisible();
    await expect(dashboardPage.getLabelsQuickLaunch()).toBeVisible();
    await expect(dashboardPage.getLabelBuzzLatestPosts()).toBeVisible();
    await expect(dashboardPage.getLabelEmployeesOnLeaveToday()).toBeVisible();
    await expect(dashboardPage.getLabelDistributtionbySubUnit()).toBeVisible();
    await expect(dashboardPage.getLabelEmployeeDistributionBylocation()).toBeVisible();

});
