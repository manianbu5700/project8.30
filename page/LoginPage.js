export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.button = page.locator('//input[@id="login"]')

    }
    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUsername(uname) {
        await this.username.fill(uname)
    }
    async enterPassword(upass) {
        await this.password.fill(upass)
    }
    async clickButton() {
        await this.button.click()
    }
}