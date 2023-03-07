interface IDioBank {
    login: boolean
}

const DioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(DioBank))
}

export const changeLocalStorage = (diobank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}