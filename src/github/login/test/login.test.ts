import {LoginPage} from '../page-object/Login.page'
import {MainPage} from '../page-object/Main.page'
import { LOGIN, PASSWORD } from "../../../../credential"

describe('Login form test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login')
    })


    let loginPage: LoginPage
    before(async () => {
        loginPage = new LoginPage(browser)
    })
    beforeEach(async () => {
        await loginPage.open()
    })

    it('user should be log in using login', async () => {
        await (await browser.$('//*[@id="login_field"]')).waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(LOGIN)
        await browser.$('//*[@id="password"]').setValue(PASSWORD)
        await (await browser.$('//*[@type="submit"]')).waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        await (await browser.$('//summary//*[contains(@class, "avatar")]')).waitForClickable({
            timeoutMsg: 'Avatar field was not displayed'
        })
        await (await browser.$('//summary//*[contains(@class, "avatar")]')).click()
        
        expect(await (await browser.$('//*[@class="css-truncate-target"]')).getText()).toEqual(LOGIN)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})






