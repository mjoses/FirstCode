import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Launch Website
  await page.goto('https://demowebshop.tricentis.com/');

  //Login
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('playwright@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('Pass1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  //const CartSuccessBar = await page.locator('#bar-notification');
  //await expect(CartSuccessBar).toBeVisible();
  //Select Product
  await page.getByRole('link', { name: 'Books' }).first().click();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();

  //verify product has been added
  
  const CartSuccessBar = await page.locator('#bar-notification');
  //page.getByLabel('[class="bar-notification success"]');
  //await CartSuccessBar.waitFor({state: "visible"});
  await expect(CartSuccessBar).toBeVisible();
  //await page.waitForTimeout(3000);

  //await CartSuccessBar.click();
  await expect(CartSuccessBar).toHaveText("The product has been added to your shopping cart");//.toBeVisible();

  //Navigate to Checkout
  await page.locator('[id="topcartlink"]').click();

  await page.getByPlaceholder
  
  //('link',{ name: 'Shopping cart (.[0-9]+?)' }).click();
  
  //getByText("Shopping cart").click();
  
  //locator('[class="ico-cart]').click();
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();

  //Enter Order Details

  const CurrentAddress = page.getByRole('option',{name:'New Address'});
  
  //page.getByText('New Address');

  if (await CurrentAddress.isVisible()){
    await page.getByLabel('Country:').selectOption('1');
    await page.getByLabel('City:').click();
    await page.getByLabel('City:').fill('Test');
    await page.getByLabel('Address 1:').click();
    await page.getByLabel('Address 1:').fill('Test1');
    await page.getByLabel('Address 2:').click();
    await page.getByLabel('Address 2:').fill('Test2');
    await page.getByLabel('Zip / postal code:').click();
    await page.getByLabel('Zip / postal code:').fill('1234');
    await page.getByLabel('Phone number:').click();
    await page.getByLabel('Phone number:').fill('0987654');
    await page.getByLabel('Fax number:').click();
  }

  // await page.getByLabel('Country:').selectOption('1');
  // await page.getByLabel('City:').click();
  // await page.getByLabel('City:').fill('Test');
  // await page.getByLabel('Address 1:').click();
  // await page.getByLabel('Address 1:').fill('Test1');
  // await page.getByLabel('Address 2:').click();
  // await page.getByLabel('Address 2:').fill('Test2');
  // await page.getByLabel('Zip / postal code:').click();
  // await page.getByLabel('Zip / postal code:').fill('1234');
  // await page.getByLabel('Phone number:').click();
  // await page.getByLabel('Phone number:').fill('0987654');
  // await page.getByLabel('Fax number:').click();

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  //await page.getByText('41.00').click();

  //Confirm Order
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  //Logout
  await page.getByRole('link', { name: 'Log out' }).click();
});