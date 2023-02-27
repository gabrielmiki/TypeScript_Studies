import { PeopleAccount } from "./PeopleAccount/PeopleAccount"
import { CompanyAccount } from "./CompanyAccount/CompanyAccount"
import { CashBackAccount } from "./CashBackAccount/CashBackAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Gabriel", 12)
console.log("Seu saldo é: ")
peopleAccount.getBalance()
console.log("Caso queira fazer um saque: ")
// peopleAccount.withdraw(10) -> Throw Exception
console.log("Deve primeiro depositar... ")
peopleAccount.deposit(20)
peopleAccount.withdraw(10)

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20)
console.log("Seu saldo é: ")
companyAccount.getBalance()
console.log("Caso queira fazer um saque: ")
// companyAccount.withdraw(10) -> Throw Exception
console.log("Deve primeiro depositar... ")
companyAccount.deposit(20)
companyAccount.withdraw(20)
console.log("Ou fazer um emprestimo: ")
companyAccount.getLoan(20)
companyAccount.withdraw(10)

const cashbackAccount: CashBackAccount = new CashBackAccount("Jose", 13)
console.log("Seu saldo é: ")
cashbackAccount.getBalance()
console.log("Caso queira fazer um saque: ")
// cashbackAccount.withdraw(10) -> Throw Exception
console.log("Deve primeiro depositar... ")
cashbackAccount.deposit(20)
cashbackAccount.withdraw(20)
console.log("Ate menos do que voce precisa... ")
cashbackAccount.deposit(10)
cashbackAccount.withdraw(20)