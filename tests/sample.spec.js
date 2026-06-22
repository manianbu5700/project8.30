import { test } from '@playwright/test'
test('Validate amzon application', async ({ page }) => {
    await page.goto('https://www.meesho.com/')
})
test('Validate application', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
})
test('Validate am application', async ({ page }) => {
    await page.goto('https://www.shopee.com/')
})



