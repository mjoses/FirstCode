import {test, expect} from '@playwright/test'
import {NavLinks} from '../../Pages/TopLinks'
import {LaunchWebsite} from '../../Pages/LaunchPage'
import {Login} from '../../Pages/LoginPage'


//This Script navigate to Login
//test('test', async ({ page }) => {

const TestName = 'Navigate to Login Page'
test (TestName, async ({page}) =>{
    
    const OpenWebsite = new LaunchWebsite(page) 
    const Link = new NavLinks(page)
    const newLogin = new Login(page)
   
    await OpenWebsite.LaunchDemoWebsite()
    await Link.GoToLoginPage()
    await newLogin.SignIn('playwright@gmail.com','Pass1234')
    await page.screenshot({ path: TestName+'.png' });
    await Link.SignOut();
    
})