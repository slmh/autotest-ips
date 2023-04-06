import { randomLine } from "./generic.data"

// расширить тип данных 
export type UserData = {
    login: string,
    password: string,
    email: string,
}

export const userDataLogin: UserData = {
    login: 'slmh',
    password: 'Murmansk999',
    email: 'salmaah22@gmail.com',
}

export const userDataEmail: UserData = {
    login: 'salmaah22@gmail.com',
    password: 'Murmansk999',
    email: 'salmaah22@gmail.com',
}

export const userDataEmpty: UserData = {
    login: '',
    password: '',
    email: 'salmaah22@gmail.com',
}

export const userDataIncorrect: UserData = {
    login: randomLine(10),
    password: randomLine(10),
    email: 'salmaah22@gmail.com',
}

