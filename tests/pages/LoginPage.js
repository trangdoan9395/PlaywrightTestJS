export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await this.page.waitForTimeout(30000); // Wait for the page to load
    }

    async fillCredentials(username, password) {
        await this.page.locator("//input[@placeholder='Username']").fill(username);
        await this.page.locator("//input[@placeholder='Password']").fill(password);
    }

    async submit() {
        await this.page.click("//button[@type='submit']");
    }
    async getWelcomeMessage() {
        return this.page.locator("//h6[text()='Dashboard']");
    }   
}


   