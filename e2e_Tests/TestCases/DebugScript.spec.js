import { test, expect } from '@playwright/test'
import { NavLinks } from '../../Pages/TopLinks'
import { LaunchWebsite } from '../../Pages/LaunchPage'
import { Login } from '../../Pages/LoginPage'
import { dataLogins } from '../../DataFiles/logins'
import { NavBar } from '../../Pages/NavigationBar'
import { BooksPage } from '../../Pages/BooksPage'
import { CartPage } from '../../Pages/CartPage'


//declare global variables
var Link
var page

//Runs a scripts before the main test open and signs into the website
test.beforeAll('Launch and Signin', async ({ browser }) => {
    page = await browser.newPage()
    Link = new NavLinks(page)
    const OpenWebsite = new LaunchWebsite(page)
    const newLogin = new Login(page)
    const newDataLogin = new dataLogins(page)
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
    let bookName

    //navigate to cart
    await Link.GotoCart()

    //const subTotal = await page.locator('tr:has-text("Sub-Total:")').locator('td:nth-child(2)');

    //console.log(await subTotal.innerText());

    console.log('Shipping Fee: ' + await newCart.getShippingFee())
    console.log('Subtotal: ' + await newCart.getSubTotal())
    console.log('TaxFee: ' + await newCart.getTaxFee())
    console.log('Total: ' + await newCart.getTotal())

    


    expect(await newCart.getTotal()).toEqual(await newCart.getShippingFee() + await newCart.getSubTotal() + await newCart.getTaxFee())
})












