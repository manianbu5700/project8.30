import { test } from '@playwright/test'
test('Validate amzon application', async ({ page }) => {
    await page.goto('https://www.meesho.com/')
})
