import { get } from "http";

export default class DashboardPage {
    constructor(page) { 
        this.page = page;
    } getLabelsTimedashboard() {
        return this.page.locator("//p[text()='Time at Work']");

    }
     getLabelsActions() {
        return this.page.locator("//p[text()='My Actions']");

    }
     getLabelsQuickLaunch() {
        return this.page.locator("//p[text()='Quick Launch']");
    } 
    getLabelBuzzLatestPosts() {
        return this.page.locator("//p[text()='Buzz Latest Posts']");

    } 
    getLabelEmployeesOnLeaveToday() {
        return this.page.locator("//p[text()='Employees on Leave Today']");

    } 
    getLabelDistributtionbySubUnit() {
        return this.page.locator("//p[text()='Employee Distribution by Sub Unit']");

    } 
    getLabelEmployeeDistributionBylocation() {
        return this.page.locator("//p[text()='Employee Distribution by Location']");

    }
}

