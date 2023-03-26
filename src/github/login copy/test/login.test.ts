import { LoginPage } from '../page-object/Login.page'
import { MainPage } from '../page-object/Main.page'
import { LOGIN, EMAIL, PASSWORD } from "../../../../credential"
import { randomLine } from "../../function/randomLine"

describe('Login form test', async () => {

    let loginPage: LoginPage
    let mainPage: MainPage

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('user should be log in using login', async () => {
        await loginPage.login(LOGIN, PASSWORD)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('user should be log in using email', async () => {
        await loginPage.login(EMAIL, PASSWORD)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('user not should be log in using empty fields', async () => {
        await loginPage.login('', '')
        expect(await loginPage.getUserLoginText()).toContain('Incorrect username or password.')
    })

    it('user not should be log in using random value login and email', async () => {
        await loginPage.login(randomLine(10), randomLine(10))
        expect(await loginPage.getUserLoginText()).toContain('Incorrect username or password.')
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})






