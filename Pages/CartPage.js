exports.CartPage= class CartPage{

constructor(page){
    this.page = page
}

async deletedProduct(productName){
    const idLocator = this.page.locator('td:nth-child(3)', { hasText: productName });
    const checkbox = this.page.locator('table.cart tbody tr', { has: idLocator }).locator('input[type=checkbox]');
    await checkbox.check();
    await this.page.getByRole('button', { name: 'Update shopping cart' }).click();
}
    
}