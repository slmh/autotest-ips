import { randomLine } from "./generic.data"

export type UserData = {
    login: string,
    password: string,
}

export const userData1: UserData = {
    login: 'slmh',
    password: 'Murmansk999',
}

export const userData2: UserData = {
    login: 'salmaah22@gmail.com',
    password: 'Murmansk999',
}

export const userData3: UserData = {
    login: '',
    password: '',
}

export const userData4: UserData = {
    login: randomLine(10),
    password: randomLine(10),
}

