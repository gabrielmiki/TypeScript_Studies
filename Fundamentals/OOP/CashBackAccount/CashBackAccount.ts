import { Account } from "../Account/Account";

export class CashBackAccount extends Account {
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        const total: number = value + 10
        if (this.validateStatus()) {
            console.log("Voce Depositou " + total)
            this.balance += value
        }
    }
}