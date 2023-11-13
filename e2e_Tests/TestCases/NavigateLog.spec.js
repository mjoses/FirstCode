import { test, expect } from '@playwright/test'
import { NavLinks } from '../../Pages/TopLinks'
import { LaunchWebsite } from '../../Pages/LaunchPage'
import { Login } from '../../Pages/LoginPage'
import {dataLogins} from '../../DataFiles/logins'


//This Script navigate to Login
//test('test', async ({ page }) => {
test('Navigate to Login Page', async ({ page }) => {

    const OpenWebsite = new LaunchWebsite(page)
    const Link = new NavLinks(page)
    const newLogin = new Login(page)
    const newDataLogin = new dataLogins(page)
    //const username = String(newDataLogin.getGenericUserName())
    //const password = String(newDataLogin.getGenericPassword())


    const username = (await newDataLogin.getGenericUserName())
    const password = (await newDataLogin.getGenericPassword())

    await OpenWebsite.LaunchDemoWebsite()
    await Link.GoToLoginPage()
    await newLogin.SignIn(username, password)
    await Link.SignOut();


    /*
    
    command run line


    set USERNAME=playwright@gmail.com
    set PASSWORD=Pass1234 
    npx playwright test ./e2e_Tests/TestCases
    
    
    */
})