const {test, expect} = require ("@playwright/test");


test("Login Test", async ({page}) => {
    // Navigate to the login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    // Fill in the username and password fields
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("password123");

    
    // Click the login button
    await page.click("//button[@type='submit']");
    
    // Wait for navigation after login
    await page.waitForNavigation();
 
    
    // Assert that a welcome message is visible
    const welcomeMessage = await page.isVisible("//h6[text()='Dashboard']");
    expect(welcomeMessage).toBeTruthy("Dashboard");
    })