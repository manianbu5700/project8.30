//DropDown Handling
import { test } from '@playwright/test'
test('Dropdown Handling', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')

    //Single DropDown
    const singleDropdown = await page.locator('//select[@id="fruits"]')
    await singleDropdown.selectOption({ index: 2 })
    // await page.waitForTimeout(3000)

    //Multiple DropDown
    const MultiDropDown = await page.locator('//select[@id="superheros"]')
    await MultiDropDown.selectOption([{ index: 2 }, { value: "ca" }, { label: "Thor" }])
    const text = await MultiDropDown.locator('option:checked').allTextContents()
    console.log(text)
    // await page.waitForTimeout(3000)
})

//Dropdown methods------>For select value from dropdown

//index ---------->{index:3}
//value ----------->{value:"1"}
//label ------------>{label:"Pine Apple"}        ----->Visibl Text()