import { test, expect } from '@playwright/test';



//Launch Website

test('Test Login for User 1', async ({page}) => {
  loginForm(page, 'username1', 'password1');
  // Do more stuff here

})

async function loginForm(page, input1, input2) {

  //test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('playwright@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('Pass1234');
  await page.getByRole('button', { name: 'Log in' }).click();
//});

}




