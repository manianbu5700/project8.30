import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
test('pom', async ({ page }) => {
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername('Hari1502')
    await login.enterPassword('Hari@123')
    await login.clickButton()

})
