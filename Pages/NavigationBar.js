/*
This is the Navigation Bar of the Tricentis web demo
*/
exports.NavBar = class NavBar {

    constructor(page) {
        this.page = page
    }

    /*
    Navigates to a category page
    @parameter  -CategoryName = Name of the category to be navigated into
    */
    async GoToACategory(CategoryName) {
        //await this.page.getByRole('link', { name: 'Books' }).first().click();
        await this.page.getByRole('link', { name: CategoryName }).first().click();
    }

}