import {LoginPage} from '../../users/page-object/Login.page'
import {ProfilePage} from '../page-object/Profile.page'
import {UserModel, createUserModel} from "../../iscommon/model/user.model"
import {userDataLogin} from '../../iscommon/data/user.data'

describe('Profile page tests', async () => {
    const user: UserModel = createUserModel(userDataLogin)

    let loginPage: LoginPage

    before(async () => {
        loginPage = new LoginPage(browser)
        loginPage.open()
        await loginPage.login(user)
    })
    
    beforeEach(async () => {
        await ProfilePage.open()
    })

    it('it', async () => {

    })


})






