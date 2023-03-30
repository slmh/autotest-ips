import {LoginPage} from '../page-object/Login.page'
import {MainPage} from '../page-object/Main.page'
import {UserModel, createUserModel} from "../../iscommon/model/user.model"
import {userDataLogin, userDataEmail, userDataEmpty, userDataIncorrect} from '../../iscommon/data/user.data'

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
        const user: UserModel = createUserModel(userDataLogin)
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(user.login)
    })

    it('user should be log in using email', async () => {
        const user: UserModel = createUserModel(userDataEmail)
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual("slmh")
    })

    it('user not should be log in using empty fields', async () => {
        const user: UserModel = createUserModel(userDataEmpty)
        await loginPage.login(user)
        expect(await loginPage.getUserLoginText()).toContain('Incorrect username or password.')
    })

    it('user not should be log in using random value login and email', async () => {
        const user: UserModel = createUserModel(userDataIncorrect)
        await loginPage.login(user)
        expect(await loginPage.getUserLoginText()).toContain('Incorrect username or password.')
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})






