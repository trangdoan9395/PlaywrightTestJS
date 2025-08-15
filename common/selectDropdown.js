export default async function selectOptionDropdown(page, optionText) {
    await page.waitForSelector("div[role='listbox'].oxd-select-dropdown")
    await page.locator(`div[role='listbox'].oxd-select-dropdown >> text='${optionText}'`).click();
}
export { selectOptionDropdown };

