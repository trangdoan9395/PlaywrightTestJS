export default class ConfigurePerformance {
    constructor(page) {
        this.page = page;
    }
    getButtonNext() {
        return this.page.locator("//i[@class='oxd-icon bi-chevron-right']/parent::button");
    }
    getallJobTitles() {
       return this.page.locator("//div[@class='oxd-table-body']//div[@role='row']//div[3]//div").allTextContents();
   }
   getCountJobTitles() {
       return this.page.locator("//span[@class='oxd-text oxd-text--span']/parent::div[@data-v-5a621acd]")
   }
   getButtonSelectjobTitle() {
       return this.page.locator("//div[@data-v-67d2aedf]/i");
    }
    getInputPerformancetracker() {          
        return this.page.locator("//input[@data-v-75e744cd]");
    }
    getButtonSearch() {
        return this.page.locator("//button[@data-v-10d463b7 and text() =' Search ']");
    }
    getButtonReset() {
        return this.page.locator("//button[@data-v-10d463b7 and text() =' Reset ']");
    }
    getTextInvalidMessage() {
        return this.page.locator("//span[text()='Invalid']").textContent();
    }
}