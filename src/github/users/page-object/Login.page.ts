
import {ChainablePromiseElement} from 'webdriverio'
import {UserModel} from "../../iscommon/model/user.model"

export class LoginPage {
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

    private getError(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="js-flash-alert"]')
    }

    private getLoginField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }
    
    private getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }

    private getPasswordField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }
}
