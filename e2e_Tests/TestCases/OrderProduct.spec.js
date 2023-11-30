import { test, expect } from '@playwright/test'
import { NavLinks } from '../../Pages/TopLinks'
import { LaunchWebsite } from '../../Pages/LaunchPage'
import { Login } from '../../Pages/LoginPage'
import { dataLogins } from '../../DataFiles/logins'
import { NavBar } from '../../Pages/NavigationBar'
import { BooksPage } from '../../Pages/BooksPage'
import { CartPage } from '../../Pages/CartPage'
import { CheckoutPage } from '../../Pages/CheckoutPage'
import { OrderConfirm } from '../../Pages/OrderConfirmationPage'
import { OrderMessages } from '../../DataFiles/OrderMessage'


//declare global variables
var Link
var page

//Runs a scripts before the main test open and signs into the website
test.beforeAll('Launch and Signin', async ({ browser }) => {
    page = await browser.newPage()
    Link = new NavLinks(page)
    const OpenWebsite = new LaunchWebsite(page)
    const newLogin = new Login(page)
    const newDataLogin = new dataLogins()
    const username = (await newDataLogin.getGenericUserName())
    const password = (await newDataLogin.getGenericPassword())


    await OpenWebsite.LaunchDemoWebsite()
    await Link.GoToLoginPage()
    await newLogin.SignIn(username, password)
})

//Logs out and closes the wesbite
test.afterAll('Sign out and Close', async ({ }) => {

    await Link.SignOut();
    await page.close()

})


//This adds and deletes product from the cart
test('Do Order', async ({ }) => {

    //initiate and declare objects and variables
    const newNavBar = new NavBar(page)
    const newBook = new BooksPage(page)
    const newCart = new CartPage(page)
    const newCheckout = new CheckoutPage(page)
    const newOrderConfirmation = new OrderConfirm(page)
    const newOrderMessage = new OrderMessages()

    //Navigate to Books category
    await newNavBar.GoToACategory('Books')

    await page.waitForTimeout(3000)
    //Adds the first book available in the cart from the category
    await newBook.AddFirstAvailableBook()

    //Get the name of the added book
    const bookName = await newBook.GetFirstAvailableBookName()

    //below is for debug purposes
    //console.log('Product Name: ' + bookName)

    //navigate to cart
    await Link.GotoCart()   

    await page.waitForTimeout(3000)
    
    //iniate and declare assertion variables
    const idLocator = await page.locator('td:nth-child(3)', { hasText: bookName });
    const bookInCart = await page.locator('table.cart tbody tr', { has: idLocator });

    //assert if the added product is in the cart
    await expect(bookInCart).toHaveCount(1)
    await expect(bookInCart).toBeVisible()

    await page.locator('table.cart-total tbody tr:has-text("Total:")').locator('td:nth-child(2)').nth(0).hover()
    await page.locator('table.cart-total tbody tr:has-text("Total:")').locator('td:nth-child(2)').nth(1).hover()

    //get Price
    const SubTotal =  parseInt(await newCart.getSubTotal())
    const ShippingFee =  parseInt(await newCart.getShippingFee())  
    const TaxFee =  parseInt(await newCart.getTaxFee())
    const Total =  parseInt(await newCart.getTotal())

    //below is for debug purposes
    //console.log('SubTotal: ' + SubTotal)
    //console.log('ShippingFee: ' + ShippingFee)
    //console.log('TaxFee: ' + TaxFee)
    //console.log('Total: ' + Total)
    
    //assert pricing is right
    let tempTotal = SubTotal + ShippingFee + TaxFee
    //console.log('tempTotal: ' + tempTotal)

    expect(Total).toEqual(tempTotal)
    expect(Total).not.toEqual(0)


    //assert if terms of service is visisble and not ticked
    const termsCheckbox = await page.locator('#termsofservice')
    await expect(termsCheckbox).not.toBeChecked()
    await expect(termsCheckbox).toBeVisible()

    //navigate to cart
    await newCart.checkTermsOfService()

    //assert if terms of service is ticked
    await expect(termsCheckbox).toBeChecked()

    //check if Checkout Button is visible
    const checkoutButton = await page.getByRole('button', { name: 'Checkout' })
    await expect(checkoutButton).toBeVisible()

    await newCart.clickCheckout()

    //fill checkout page and confirm order
    //add assertion for elements timeout issues
    await newCheckout.doBillingAddress()
    await page.waitForTimeout(3000)

    await newCheckout.doShippingAddress()
    await page.waitForTimeout(3000)

    await newCheckout.doShippingMethod()
    await page.waitForTimeout(3000)

    await newCheckout.doSPaymentMethod()
    await page.waitForTimeout(3000)

    await newCheckout.doPaymentInfo()
    await page.waitForTimeout(3000)

    //assert if pricing is consistent
    expect(parseInt(await newCheckout.getSubTotal())).toEqual(SubTotal)
    expect(parseInt(await newCheckout.getShippingFee())).toEqual(ShippingFee)
    expect(parseInt(await newCheckout.getTaxFee())).toEqual(TaxFee)

    const checkOutTotal =  parseInt(await newCheckout.getTotal())
    const AdditionalFee =  parseInt(await newCheckout.getAdditionalFee())

    tempTotal = Total + AdditionalFee
    expect(checkOutTotal).toEqual(tempTotal)

    await newCheckout.doConfirmOrder()
    await page.waitForTimeout(3000)

    //assert order is successful
    expect(await newOrderConfirmation.getOrderMessage()).toEqual((await newOrderMessage.getSuccessfulOrderMessage()))
    const orderNumber = await newOrderConfirmation.getOrderNumber()

    //Navigate to user account
    await Link.GoToUserAccount()

})












