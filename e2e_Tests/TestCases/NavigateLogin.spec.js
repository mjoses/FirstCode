import {test, expect} from '@playwright/test'
import {NavLinks} from '../../Pages/TopLinks'
import {LaunchWebsite} from '../../Pages/LaunchPage'
import {Login} from '../../Pages/LoginPage'


//This Script navigate to Login
//test('test', async ({ page }) => {
test ('Navigate to Login Page', async ({page}) =>{
    
    const OpenWebsite = new LaunchWebsite(page) 
    const Link = new NavLinks(page)
    const newLogin = new Login(page)
   
    await OpenWebsite.LaunchDemoWebsite()
    await Link.GoToLoginPage()
    await newLogin.SignIn('playwright@gmail.com','Pass1234')
    await Link.SignOut();
    
})