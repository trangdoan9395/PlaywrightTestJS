export default class ManageReviewPage {
    constructor(page) {
        this.page = page;
    }getButtonManageReview() {
        return this.page.locator("//span[contains(text(),'Manage Reviews ')]/child::i");
    }
    getButtonSearchManageReview(name) {
        return this.page.locator(`//ul[@data-v-429cfcf3]//li//child::a[text() = '${name}']`);
    }
    getInputEmployName() {
        return this.page.locator("//input[@data-v-75e744cd]//parent::div/input");
    }getButtonSelectJobTitle(jobTitle) {
        return this.page.locator(`//label[contains(text(),'${jobTitle}')]//parent::div//following-sibling::div//i`);

    }
    getTitleHeader(){
        return this.page.locator("//h5[text()='Employee Reviews']");
    }
    getLabelSelect(label){
        return this.page.locator(`//label[text()='${label}']//parent::div//following-sibling::div//child::div[@class='oxd-select-text oxd-select-text--active']`);
    }
    





}


   