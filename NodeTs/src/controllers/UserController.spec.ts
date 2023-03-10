import { User, UserService } from "../services/UserServices"
import { UserController } from "./UserController"
import { makeMockRequest } from "../__mocks__/MockRequest.mock"
import { makeMockResponse } from "../__mocks__/MockResponse.mock"
import { Request, response } from "express"

describe('User Controler', () => {

    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }
    const userController = new UserController(mockUserService as UserService)

    it('Deve adicionar um novo usuario', () => {
        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: 'gabriel@lelel'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário Criado' })
    })

    it('Deve retornar resposta de erro, caso request nao possua nome', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'gabriel@lelel'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request! Nome ou Email Obrigatório!' })
    })

    // it('Deve retornar todos os usuarios no database', () => {
    //     const mockRequest = makeMockRequest({})
    //     const mockResponse = makeMockResponse()
    //     userController.getAllUsers(mockRequest, mockResponse)
    //     expect(mockResponse.state.status).toBe(200)
    // })

    it('Deve retornar erro para o caso de nao fornecer o email', () => {
        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: ''
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request! Nome ou Email Obrigatório!' })
    })

    it('Deve deletar o usuario informado', () => {

        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: ''
            }
        } as Request

        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário Deletado' })
    })
})