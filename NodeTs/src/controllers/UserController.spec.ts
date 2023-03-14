import { UserService } from "../services/UserServices"
import { UserController } from "./UserController"
import { makeMockRequest } from "../__mocks__/MockRequest.mock"
import { makeMockResponse } from "../__mocks__/MockResponse.mock"
import { Request, response } from "express"

const mockUserService = {
    createUser: jest.fn(),
    getUser: jest.fn()
}

jest.mock('../services/UserServices', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('User Controler', () => {

    const userController = new UserController()
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuario', () => {
        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: 'gabriel@lelel',
                password: 'password'
            }
        } as Request
        
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário Criado' })
    })

    it('Deve retornar resposta de erro, caso request nao possua nome', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'gabriel@lelel',
                password: 'password'
            }
        } as Request
        
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request! Todos os campos são Obrigatórios!' })
    })

    it('Deve retornar erro para o caso de nao fornecer o email', () => {
        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: '',
                password: 'password'
            }
        } as Request
        
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request! Todos os campos são Obrigatórios!' })
    })

    it('Deve retornar erro para o caso de nao informe o password', () => {
        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: 'gabriel@lelel',
                password: ''
            }
        } as Request
        
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request! Todos os campos são Obrigatórios!' })
    })

    it('Deve deletar o usuario informado', () => {

        const mockRequest = {
            body: {
                name: 'Gabriel',
                email: ''
            }
        } as Request

        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário Deletado' })
    })

    it('Deve retornar o usuario com o user id informado', () => {
        const mockRequest = makeMockRequest({
            params: {
                user_id: '123456'
            }
        })

        userController.getUser(mockRequest, mockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith('123456')
        expect(mockResponse.state.status).toBe(200)
    })
})