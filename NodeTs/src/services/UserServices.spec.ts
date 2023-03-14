import { UserService } from "./UserServices"
import * as jwt from 'jsonwebtoken'

jest.mock("../repositories/UserRepository")

jest.mock("../database", () => {
    initialize: jest.fn()
})

jest.mock('jsonwebtoken')

const mockUserRepository = require("../repositories/UserRepository")

const mcokUser = {
    id_user: '12345',
    name: 'Gabriel',
    email: 'gmail',
    password: '12345'
}

describe('UserService', () => {

    const userService = new UserService(mockUserRepository)
    it('Deve adicionar um novo usuário', async () => {

        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mcokUser))

        const response = await userService.createUser('Gabriel', "gabriel@gmail", "12345")

        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            id_user: '12345',
            name: 'Gabriel',
            email: 'gmail',
            password: '12345'
        })
    })

    it('Deve retornar um token de usuario', async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mcokUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('gabriel@lelel', '12345')
        expect(token).toBe('token')
    })

    it('Deve retornar um erro caso nao encontre um usuario', async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('gabriel@invalid', '12345')).rejects.toThrowError(new Error('Email ou Password Invalidos!'))
    })
})