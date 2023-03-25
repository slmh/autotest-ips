import { EMAIL, LOGIN, PASSWORD } from "../../credential"
import { randomLine } from "../function/randomLine";

describe('Login form test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login')
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

    it('user should be log in using email', async () => {
        await (await browser.$('//*[@id="login_field"]')).waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(EMAIL)
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

    it('user not should be log in using empty fields', async () => {
        await (await browser.$('//*[@id="login_field"]')).waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await (await browser.$('//*[@type="submit"]')).waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        expect(await (await browser.$('//*[@class="js-flash-alert"]')).getText()).toContain('Incorrect username or password.')
    })

    it('user not should be log in using invalid values', async () => {

        await (await browser.$('//*[@id="login_field"]')).waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(randomLine(10))
        await browser.$('//*[@id="password"]').setValue(randomLine(10))
        await (await browser.$('//*[@type="submit"]')).waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })  
        await browser.$('//*[@type="submit"]').click()

        expect(await (await browser.$('//*[@class="js-flash-alert"]')).getText()).toContain('Incorrect username or password.')
    })
    
    afterEach(async () => {
        await browser.reloadSession()
    })
})






