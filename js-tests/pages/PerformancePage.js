export default class PerformancePage {
    constructor(page) {
        this.page = page;
    }

     getPerformanceChart() {
        return this.page.locator("//div[@id='performance-chart']");
    }

     getTopPerformers() {
        return this.page.locator("//div[@id='top-performers']");
    }

     getPerformanceSummary() {
        return this.page.locator("//div[@id='performance-summary']");
    }
     getButtonPerformance() {
        return this.page.locator("//span[text()='Performance']/parent::a");
        
    }
    getLabelConfigure() {
        return this.page.locator("//span[contains (text(),'Configure ')]/parent::li");
    }
     getButtonConfigure() {
        return this.page.locator("//span[contains (text(),'Configure ')]/parent::li");
    }
     getDataConfigurations(a) {
        return this.page.locator(`//ul[@data-v-5327b38a]/li/ul/li/a[text() ='${a}']`);
    }
   

}
