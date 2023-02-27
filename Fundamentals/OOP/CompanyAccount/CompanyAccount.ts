import { Account } from "../Account/Account";

export class CompanyAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (value: number): void => {
        if (this.validateStatus()) {
            console.log("Voce pegou um emprestimo de " + value)
            this.balance += value
        }
    }
}