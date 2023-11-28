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

    //iniate and declare assertion variables
    const idLocator = await page.locator('td:nth-child(3)', { hasText: bookName });
    const checkbox = await page.locator('table.cart tbody tr', { has: idLocator });

    //Navigate to Books category
    await newNavBar.GoToACategory('Books')

    //Adds the first book available in the cart from the category
    await newBook.AddFirstAvailableBook()

    //Get the name of the added book
    bookName = await newBook.GetFirstAvailableBookName()

    //below is for debug purposes
    //console.log('Product Name: ' + bookName)

    //navigate to cart
    await Link.GotoCart()

    //assert if the added product is in the cart
    await expect(checkbox).toHaveCount(1)
    await expect(checkbox).toBeVisible()

    //delete product
    await newCart.deletedProduct(bookName)

    //Assert if product is deleted
    await expect(checkbox).toHaveCount(0)
})












