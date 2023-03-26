import { UserData } from "../data/profile.data"

type UserModel = {
    login: string,
    password: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        password: data.password,
    }
}

export {UserModel, createUserModel}