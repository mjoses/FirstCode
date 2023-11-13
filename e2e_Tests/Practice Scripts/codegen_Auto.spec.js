import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#stripes--1118125329').click();
  await page.locator('#stripes--1118125329').fill('steve_jobs');
  await page.locator('input[name="password"]').click();
  await page.getByText('Username: Password:').click();
  await page.locator('input[name="password"]').fill('Pass1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#SidebarContent').getByRole('link').first().click();
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Confirm' }).click();
  await page.getByRole('link', { name: 'Return to Main Menu' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});