import { login } from "./login"
import { api } from "./api"
import { useContext } from "react"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('login', () => {
    const mockEmail = 'gabriel@gmail'
    const mockPass = '12345'

    it('Deve exibir um alerta com boas vindas caso o email seja valido', async() => {
        const response = await login(mockEmail, mockPass)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login("email@invalido", mockPass)
        // expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        // expect(mockNavigate).not.toHaveBeenCalled()
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja invalida', async() => {
        const response = await login(mockEmail, '14589')
        expect(response).toBeFalsy()
    })
})