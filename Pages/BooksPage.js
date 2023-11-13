/*
This is the Book page of the Tricentis web demo
*/

exports.BooksPage = class BooksPage {

    constructor(page) {
        this.page = page
    }

    /*
    Adds the first available Book into the cart
    */
    async AddFirstAvailableBook() {
        await this.page.getByRole('button', { name: 'Add to cart' }).nth(0).click();
    }

    /*
    Gets the name of the first available product.
    @return - the name of the first avaialble book
    */
    async GetFirstAvailableBookName() {
        const addCartButton = await this.page.getByRole('button', { name: 'Add to cart' }).nth(0)
        const productName = await this.page.locator('[class="details"]', { has: addCartButton }).locator('[class="product-title"]').nth(0).innerText()
        return productName
    }

}