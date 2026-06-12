//Frame Handling
import { test } from '@playwright/test'
test('Frame Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')

    //Single Frame
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('Hii Bro')

    await page.locator('(//a[@class="analystic"])[2]').click()

    //Multi Frame
    const OuterFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerFrame = await OuterFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await innerFrame.locator('//input[@type="text"]').fill('Hello Buddy')
})