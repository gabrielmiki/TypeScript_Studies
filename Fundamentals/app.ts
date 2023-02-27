let n: number = 5
let s: string = "Youo"
let b: boolean = true
let lots: number | string | boolean = "All three types are allowed"

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: "Ga",
    idade: 23
}

const outraPessoa: Pessoa = {
    nome: "Lais",
    idade: 34,
    profissao: "Professoara"
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayString: Array<string> = [
    "1", "2", "3"
]

const typeUser = {
    admin: "Administrador",
    student: "Estudante",
    viewr: "Vizualizador"
}

function validatteUser(user: string) { 
    console.log(typeUser[user as keyof typeof typeUser]);
}

validatteUser("admin")

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const arrayNumber: Array<number> = [
    1, 2, 3
]

console.log(arrayNumber.length);

arrayNumber.push(4)

console.log("Array com novo elemento", arrayNumber);

arrayNumber.pop()

console.log("Array sem ultimo valor");

const buscaNum = arrayNumber.find(num => num === 4)

arrayNumber.map(num => console.log(num))

arrayNumber.forEach(num => console.log(num))

arrayNumber.forEach(num => {
    if (num > 2 && num % 2 === 0) {
        console.log(num)
    }
})