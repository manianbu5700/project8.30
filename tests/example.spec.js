import { test } from '@playwright/test'
test('Validate login functionality', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.locator('//input[@id="username"]').fill('student')
  await page.locator('//input[@id="password"]').fill('Password123')
  await page.locator('//button[@id="submit"]').click()
  await page.waitForTimeout(3000) //External wait ---------->Used for our refference not must

})

//Locator Concept--------> xpath------>method

//id--------->//input[@id="username"]
//name-------->//input[@name="username"]
//class------->//button[@class="btn"]
//attribute and value------>//input[@type="text"]
//Visible text------->//button[text()="Submit"]

