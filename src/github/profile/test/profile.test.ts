import {LoginPage} from '../../users/page-object/Login.page'
import {MainPage} from '../../users/page-object/Main.page'
import {UserModel, createUserModel} from "../../iscommon/model/user.model"
import {userDataLogin} from '../../iscommon/data/user.data'

describe('Login', async () => {

    let loginPage: LoginPage
    let mainPage: MainPage

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
        
    })
    
    beforeEach(async () => {
        await loginPage.open()
        const user: UserModel = createUserModel(userDataLogin)
        await loginPage.login(user)
        await mainPage.openUserMenu()
    })

    it('it', async () => {

    })



    afterEach(async () => {
        await browser.reloadSession()
    })
})






