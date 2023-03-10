import { User, UserService } from "./UserServices"

describe('UserService', () => {
    const mockDB: User[] = [] 
    const userService = new UserService(mockDB)

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('Gabriel', "gabriel@gmail")
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado:', mockDB)
    })
})