export default class MyInfoPage {
  constructor(page) {
    this.page = page;}
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
        return this.page.locator("//label[contains(text(), 'License Number')] ");
    }
    getInputDate(){
        return this.page.locator("//label[text()= 'License Expiry Date'] //parent::div//following-sibling::div //input ");
    }
    getInputDateOfBirth(){
        return this.page.locator("//label[text()= 'Date of Birth'] //parent::div//following-sibling::div //input");
    }


    }


    

   
  