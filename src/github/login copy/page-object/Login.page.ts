
import {ChainablePromiseElement} from 'webdriverio'
export {LoginPage}

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getUserLoginText(): Promise<string> {
        return this.getError().getText()
    }

    public async login(userEmail: string, userPassword: string): Promise<void>{
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getLoginField().setValue(userEmail)
        await this.getPasswordField().setValue(userPassword)
        await this.getLoginButton().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getError() {
        return this.browser.$('//*[@class="js-flash-alert"]')
    }

    private getLoginField() {
        return this.browser.$('//*[@id="login_field"]')
    }
    
    private getLoginButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return this.browser.$('//*[@type="submit"]')
    }

    private getPasswordField() {
        return this.browser.$('//*[@id="password"]')
    }
}
