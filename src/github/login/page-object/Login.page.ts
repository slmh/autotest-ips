
import {ChainablePromiseElement} from 'webdriverio'
export {LoginPage}

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    private getLoginField() {
        return this.browser.$('//*[@id="login_field"]')
    }
       
    private getPasswordField() {
        return this.browser.$('//*[@id="password"]')
    }

    private getLoginButton() /* : ChainablePromiseElement<Promise<WebdriverIO.Element>> */ {
        return this.browser.$('//*[@type="submit"]')
    }

    public async login(userEmail: string, userPassword: string): Promise<void>{
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getLoginField().setValue(userEmail)
        await this.getPasswordField().setValue(userEmail)
        await this.getLoginButton().setValue(userEmail)
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }
}
