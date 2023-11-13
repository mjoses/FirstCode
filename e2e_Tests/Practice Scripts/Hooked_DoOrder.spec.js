import { test, expect } from '@playwright/test';

test.beforeEach('Login', async ({ page }) => {

  //Launch Website
  await page.goto('https://demowebshop.tricentis.com/');

  //Login
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('playwright@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('Pass1234');
  await page.getByRole('button', { name: 'Log in' }).click();

});

test('Add Product to Cart', async ({ page }) => {
  //Select Product
  await page.getByRole('link', { name: 'Books' }).first().click();

  //Add Product
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
});



test('Add Another Product to Cart' , async ({ page }) => {

  //Select Product
  await page.getByRole('link', { name: 'Books' }).first().click();

  //Add Product
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
});


test.afterEach('LogOut', async ({ page }) => {
  //Log Out
  await page.getByRole('link', { name: 'Log out' }).click();
});