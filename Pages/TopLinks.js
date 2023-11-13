const { expect } = require("playwright/test")

exports.NavLinks = class NavLinks {

    constructor(page) {
        this.page = page
    }


    async GoToLoginPage() {
        //await this.page.waitForTimeout(30000);
        await this.page.getByRole('link', { name: 'Log in' }).click()
    }

    async SignOut() {
        //await expect(this.page.getByRole('link', { name: 'Log out' })).toBeVisible()
        await this.page.getByRole('link', { name: 'Log out' }).click()
    }


    async GotoCart() {
        await this.page.locator('[id="topcartlink"]').click();
    }






}