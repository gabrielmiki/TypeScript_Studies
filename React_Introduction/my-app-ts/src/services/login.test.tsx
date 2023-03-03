import { login } from "./login"

const mockAlert = jest.fn()
window.alert = mockAlert

describe('login', () => {
    it('Deve exibir um alerta com boas vindas', () => {
        login()
        expect(mockAlert).toBeCalled()
        expect(mockAlert).toHaveBeenCalledWith('Bem Vindo')
    })
})