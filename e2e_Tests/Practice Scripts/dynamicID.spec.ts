import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/dynamicid');
  await page.getByRole('button', { name: 'Button with Dynamic ID' }).click();
  await page.getByRole('button', { name: 'Button with Dynamic ID' }).hover();
  await page.waitForTimeout(3000);

});