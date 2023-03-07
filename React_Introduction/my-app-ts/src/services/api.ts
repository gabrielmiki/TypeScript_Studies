import { resolve } from "path"

const conta = {
    email: 'gabriel@gmail',
    password: '123456',
    name: 'Gabriel Miki',
    balance: 2000,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})