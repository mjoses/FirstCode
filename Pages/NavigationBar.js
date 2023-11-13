exports.NavBar = class NavBar{

    constructor(page){
        this.page = page
    }


    async GoToACategory(CategoryName){
        await this.page.getByRole('link', { name: 'Books' }).first().click();
       // await this.page.getByRole('link', { name: CategoryName }).first().click();
    }

}