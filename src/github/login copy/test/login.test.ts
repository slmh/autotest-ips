import {LoginPage} from '../page-object/Login.page'
import {MainPage} from '../page-object/Main.page'
import {UserModel, createUserModel} from "../model/login.model"
import {userData1, userData2, userData3, userData4} from '../data/login.data'

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
        const user: UserModel = createUserModel(userData1)
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(user.login)
    })

    it('user should be log in using email', async () => {
        const user: UserModel = createUserModel(userData2)
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual("slmh")
    })

    it('user not should be log in using empty fields', async () => {
        const user: UserModel = createUserModel(userData3)
        await loginPage.login(user)
        expect(await loginPage.getUserLoginText()).toContain('Incorrect username or password.')
    })

    it('user not should be log in using random value login and email', async () => {
        const user: UserModel = createUserModel(userData4)
        await loginPage.login(user)
        expect(await loginPage.getUserLoginText()).toContain('Incorrect username or password.')
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})






