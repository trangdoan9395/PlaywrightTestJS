export default class MyInfoPage {
  constructor(page) {
    this.page = page;}
    getTitleHeader(){
        return this.page.locator("//h6[text()='PIM']");
    }
    getButtonMyInfo(){
        return this.page.locator("//span[text()='My Info']/parent::a");
    }
    getInputEmployFirstName(){
        return this.page.locator("//input[@placeholder='First Name']");
    }
    getInputEmployMiddleName(){
        return this.page.locator("//input[@placeholder='Middle Name']");
    }
    getInputEmployLastName(){
        return this.page.locator("//input[@placeholder= 'Last Name']");
    }
    getInputEmployID(){
        return this.page.locator("//label[text()='Employee Id']//parent::div/following-sibling::div/input");
    }
    getInputOtherID(){
        return this.page.locator("//label[text()='Other Id']//parent::div/following-sibling::div/input");
    }
    getInputLicenseNumber(){
        return this.page.locator("//label[contains(text(), 'License Number')]//parent::div/following-sibling::div/input");
    }
    getInputDate(){
        return this.page.locator("//label[text()= 'License Expiry Date'] //parent::div//following-sibling::div //input ");
    }
    getInputDateOfBirth(){
        return this.page.locator("//label[text()= 'Date of Birth'] //parent::div//following-sibling::div //input");
    }
    getButtonSave(){
        return this.page.locator("//p[text()= ' * Required']//parent::div/button");
    }


    }


    

   
  