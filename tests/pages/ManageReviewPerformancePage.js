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
        return this.page.locator("//input[@data-v-75e744cd]//parent::div");
    }getButtonSelectJobTitle() {
        return this.page.locator("//span[contains(text(),'Select Job Title')]");
    }getSelectObjectJobTitle() {
        return this.page.locator("");
        
    }
    





}


   