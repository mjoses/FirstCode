exports.CheckoutPage = class CheckoutPage {

    constructor(page) {
        this.page = page
    }

    async doBillingAddress() {
        const CurrentAddress = await this.page.getByRole('option', { name: 'New Address' });
        if (await CurrentAddress.isVisible()) {
            await this.page.getByLabel('Country:').selectOption('1');
            await this.page.getByLabel('City:').click();
            await this.page.getByLabel('City:').fill('Test');
            await this.page.getByLabel('Address 1:').click();
            await this.page.getByLabel('Address 1:').fill('Test1');
            await this.page.getByLabel('Address 2:').click();
            await this.page.getByLabel('Address 2:').fill('Test2');
            await this.page.getByLabel('Zip / postal code:').click();
            await this.page.getByLabel('Zip / postal code:').fill('1234');
            await this.page.getByLabel('Phone number:').click();
            await this.page.getByLabel('Phone number:').fill('0987654');
            await this.page.getByLabel('Fax number:').click();
        }
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async doShippingMethod(){
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async doShippingAddress(){
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async doSPaymentMethod(){
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async doPaymentInfo(){
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async doConfirmOrder(){
        await this.page.getByRole('button', { name: 'Confirm' }).click();
    }

    async getSubTotal() {
        const subTotal = await this.page.locator('table.cart-total tbody tr:has-text("Sub-Total:")').locator('td:nth-child(2)').innerText();
        return parseInt(subTotal)
    }

    async getShippingFee() {
        const ShippingFee = await this.page.locator('table.cart-total tbody tr:has-text("Shipping:")').locator('td:nth-child(2)').innerText();
        return parseInt(ShippingFee)
    }

    async getTaxFee() {
        const TaxFee = await this.page.locator('table.cart-total tbody tr:has-text("Tax:")').locator('td:nth-child(2)').innerText();
        return parseInt(TaxFee)
    }

    async getAdditionalFee() {
        const AdditionalFee = await this.page.locator('table.cart-total tbody tr:has-text("Payment method additional fee:")').locator('td:nth-child(2)').innerText();
        return parseInt(AdditionalFee)
    }

    async getTotal() {
        const totalIdentifier = await this.page.getByRole('cell', { name: 'Total:', exact: true })
        const Total = await this.page.locator('table.cart-total tbody tr', { has: totalIdentifier }).locator('td:nth-child(2)').innerText()
        return parseInt(Total)
    }





}