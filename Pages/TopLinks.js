/*
This is an object controller of the Top Right links of the demo workshop
*/

const { expect } = require("playwright/test")

exports.NavLinks = class NavLinks {

    constructor(page) {
        this.page = page
    }

    /*
    Navigates Login Page
    */
    async GoToLoginPage() {
        //await this.page.waitForTimeout(30000);
        await this.page.getByRole('link', { name: 'Log in' }).click()
    }

    /*
    Signs out the user
    */
    async SignOut() {
        //await expect(this.page.getByRole('link', { name: 'Log out' })).toBeVisible()
        await this.page.getByRole('link', { name: 'Log out' }).click()
    }

    /*
    Navigates to Cart
    */
    async GotoCart() {
        await this.page.locator('[id="topcartlink"]').click();
    }






}