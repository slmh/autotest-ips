
import {ChainablePromiseElement} from 'webdriverio'

export class MainPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public getUserLoginText(): Promise<string> {
        return this.getUserLogin().getText()
    }

    public async openUserMenu(): Promise<void> {
        await this.getUserAvatar().waitForClickable({
            timeoutMsg: 'User avatar was not clickable'
        })
        await this.getUserAvatar().click()
    }

    private getUserAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary/img')
    }
       
    private getUserLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//details-menu//strong')
    }
}
