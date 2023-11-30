exports.OrderConfirm = class OrderConfirm{

    constructor(page){
        this.page = page
    }

    async getOrderNumber(){
        const tempOrderNumber = await this.page.getByText(/Order number: \d+/).innerText()
        const OrderNumber = tempOrderNumber.substring(14)

        return OrderNumber              
    }

    async getOrderMessage(){
        const orderMessage = await this.page.locator('.title').innerText()
        console.log(orderMessage)

        return orderMessage
    }

    async clickContinue(){
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

}