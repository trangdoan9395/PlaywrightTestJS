export default class PerformancePage {
    constructor(page) {
        this.page = page;
    }
    getButtonCandidates(namebutton) {
        return this.page.locator(`//a[text()='${namebutton}']//parent::li`);
    }
    getButtonCandidateName(){
        return this.page.locator("//input[@placeholder= 'Type for hints...']");
    }
    getButtonKeywordInput() {
        return this.page.locator("//input[@placeholder= 'Type for hints...']");
    }getButtonDateOfApplicationFrom(){
        return this.page.locator("//input[@placeholder= 'From']");
    }getButtonDataOfapplicationto(){
        return this.page.locator("//input[@placeholder= 'To']");
    }getButtonReset(){
        return this.page.locator("//button[text() =' Reset ']");
    }
    getButtonSearch(){
        return this.page.locator("//button[text() =' Search ']");
    }
    




}