
import {ChainablePromiseElement} from 'webdriverio'
import {UserModel} from "../model/profile.model"
export {ProfilePage}

class ProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }



    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }


}
