
import {ChainablePromiseElement} from 'webdriverio'
import {UserModel} from "../model/login.model"
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

    public async login(user: UserModel): Promise<void>{
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getLoginField().setValue(user.login)
        await this.getPasswordField().setValue(user.password)
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
