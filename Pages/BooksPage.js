exports.BooksPage= class BooksPage{

constructor(page){
    this.page = page
}

async AddFirstAvailableBook(){
    await this.page.getByRole('button', { name: 'Add to cart' }).nth(0).click();
}

async GetFirstAvailableBookName(){
    const addCartButton = await this.page.getByRole('button', { name: 'Add to cart' }).nth(0)
    const productName = await this.page.locator('[class="details"]', { has: addCartButton }).locator('[class="product-title"]').nth(0).innerText()
    return productName
}
    
}