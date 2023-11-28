const { assert } = require("console");

/*
This is the Cart Page of the demo website
*/
exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page
    }


    /*
    Deletes the given product name from the cart
    @paramater - productName = name of the product to be deleted
    */
    async deletedProduct(productName) {
        const idLocator = await this.page.locator('td:nth-child(3)', { hasText: productName });
        const checkbox = await this.page.locator('table.cart tbody tr', { has: idLocator }).locator('input[type=checkbox]');
        await checkbox.check();
        await this.page.getByRole('button', { name: 'Update shopping cart' }).click();
    }


    async getSubTotal() {
        const subTotal = await this.page.locator('table.cart-total tbody tr:has-text("Sub-Total:")').locator('td:nth-child(2)').innerText();
        return subTotal
    }

    async getShippingFee() {
        const ShippingFee = await this.page.locator('table.cart-total tbody tr:has-text("Shipping:")').locator('td:nth-child(2)').innerText();
        return ShippingFee
    }

    async getTaxFee() {
        const TaxFee = await this.page.locator('table.cart-total tbody tr:has-text("Tax:")').locator('td:nth-child(2)').innerText();
        return TaxFee      
    }

    async getTotal() {
        const totalIdentifier = await this.page.getByRole('cell', { name: 'Total:', exact: true })
        const Total = await this.page.locator('table.cart-total tbody tr', { has: totalIdentifier }).locator('td:nth-child(2)').innerText()
        return Total
    }

    


}