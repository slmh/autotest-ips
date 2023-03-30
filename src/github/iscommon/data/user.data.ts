import { randomLine } from "./generic.data"

export type UserData = {
    login: string,
    password: string,
}

export const userDataLogin: UserData = {
    login: 'slmh',
    password: 'Murmansk999',
}

export const userDataEmail: UserData = {
    login: 'salmaah22@gmail.com',
    password: 'Murmansk999',
}

export const userDataEmpty: UserData = {
    login: '',
    password: '',
}

export const userDataIncorrect: UserData = {
    login: randomLine(10),
    password: randomLine(10),
}

