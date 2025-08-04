export class DashboardPage {
    constructor(page) { 
        this.page = page;
    }async getLabelsTimedashboard() {
        return this.page.locator("//h6[text()='Dashboard']");

    }
    async getLabelsActions() {
        return this.page.locator("//p[text()='My Actions']");

    }async getLabelsQuickLaunch() {
        return this.page.locator("//p[text()='Quick Launch']");


    }async getLabelBuzzLatestPosts() {
        return this.page.locator("//p[text()='Latest Posts']");

    }async getLabelEmployeesOnLeaveToday() {
        return this.page.locator("//p[text()='Employees on Leave Today']");

    }async getLabelDistributtionbySubUnit() {
        return this.page.locator("//p[text()='Distribution by Sub Unit']");

    }async getLabelEmployeeDistributionBylocation() {
        return this.page.locator("//p[text()='Employee Distribution by Location']");

    }
}

