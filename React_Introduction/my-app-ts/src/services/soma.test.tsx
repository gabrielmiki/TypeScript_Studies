import { soma, multiplica } from './soma'

describe('soma', () => {
    it('Deve somar um ao numero informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('Deve Multplicar o numero por 2', () => {
        const value = multiplica(2)
        expect(value).toBe(4)
    })
})