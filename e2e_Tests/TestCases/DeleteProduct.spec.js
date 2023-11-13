import { test, expect } from '@playwright/test'
import { NavLinks } from '../../Pages/TopLinks'
import { LaunchWebsite } from '../../Pages/LaunchPage'
import { Login } from '../../Pages/LoginPage'
import { dataLogins } from '../../DataFiles/logins'
import { NavBar } from '../../Pages/NavigationBar'
import { BooksPage } from '../../Pages/BooksPage'
import { CartPage } from '../../Pages/CartPage'

var Link
var page

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


test.afterAll('Sign out and Close', async ({ }) => {

    await Link.SignOut();
    await page.close()

})

test('Add a Product', async ({ }) => {

    const newNavBar = new NavBar(page)
    const newBook = new BooksPage(page)
    const newCart = new CartPage(page)
    let bookName


    await newNavBar.GoToACategory('Books')

    await newBook.AddFirstAvailableBook()
    bookName = await newBook.GetFirstAvailableBookName()

    console.log('Product Name: ' + bookName)
    await Link.GotoCart()

    const idLocator =  await page.locator('td:nth-child(3)', { hasText: bookName });
    const checkbox =  await page.locator('table.cart tbody tr', { has: idLocator });

    await expect(checkbox).toHaveCount(1)
    await expect(checkbox).toBeVisible()





    //Assert if produc is added

    //delete product
    await newCart.deletedProduct(bookName)

    //Assert if product is deleted

    await expect(checkbox).toHaveCount(0)







})












