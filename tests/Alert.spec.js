//Alert Handling
//page.once -------------> Used to handle single alert at a time
//page.on ---------------> Used to handle multiple alert 

import { test } from '@playwright/test'
test('Alert Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    //Simple Alert
    await page.on('dialog', async (dialog) => {
        await dialog.accept()
        console.log("Simple Alert :", dialog.message())
    })
    await page.locator('//button[@class="btn btn-danger"]').click()
    // await page.waitForTimeout(3000)

    //confirmation Alert
    await page.locator('(//a[@class="analystic"])[2]').click()

    // await page.once('dialog', async (dialog) => {
    //     await dialog.dismiss()
    //     console.log("Confirmation Alert :", dialog.message())

    // })
    await page.locator('//button[@class="btn btn-primary"]').click()

    //Prompt Alert
    await page.locator('(//a[@class="analystic"])[3]').click()

    // await page.once('dialog', async (dialog) => {
    //     await dialog.accept('Hii Buddy')
    //     console.log("Prompt Alert :", dialog.message())
    // })
    await page.locator('//button[@class="btn btn-info"]').click()
})


