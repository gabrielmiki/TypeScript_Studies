import { getAllLocalStorage, createLocalStorage, changeLocalStorage } from "./Storage"

const DioBank = {
    login: false
}

describe('Storage', () => {

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('Deve retornar o objeto no local storage', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(DioBank))
    })

    it('Deve alterar o valor do objeto no localstorage', () => {
        changeLocalStorage(DioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(DioBank))
    })
})