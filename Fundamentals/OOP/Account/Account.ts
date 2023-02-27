export abstract class Account {
    private readonly name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    } 

    getName = (): string => {
        return this.name
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            console.log("Voce Depositou " + value)
            this.balance += value
        }
    }

    withdraw = (value: number): void => {
        if (this.validateBalance(value)) {
            console.log("Voce Sacou " + value)
        } 
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error("Conta Invalida!")
    }

    validateBalance = (value: number): boolean => {
        if (this.balance >= value) {
            return true
        }
        throw new Error("Saldo Insuficiente!")
    }
}