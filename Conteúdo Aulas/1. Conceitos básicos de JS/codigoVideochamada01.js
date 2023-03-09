/* CÓDIGO FEITO NA VÍDEOCHAMADA 01 - 04/03/2021 */

const minhaString = "Ivan Guimarães"

const meuNumero = 22

const lista1 = [1,2,3,4]

const lista2 = [1.1,2.4,3.5,4.4]

const lista3 = ['ivan', 'Henry', 'Victoria']

const lista4 = [1, 1.1, 'Ivan']

const pessoa = { nome: "Et", idade: 30, sexo: "M" }

// for (let num of lista1)
//     console.log(num)

// for (let num of lista2)
//     console.log(num)

// for (let info in pessoa)
//     console.log(`${info}: ` + pessoa[info])

// if (22 > 18)
//     console.log("O Ivan é velho.")

// if (22 < 100)
//     console.log("O Ivan ainda não morreu.")

// 10 > 5 ? 
//     console.log("10 > 5") : 
//     console.log("Vc claramente ñ sabe contar")

const listaIdade = [18, 18, 20, 19, 19, 22]

const x = 22

const obj2 = { nm: '', idd: 0 }
obj2.nm = "Ivan G."
obj2.idd = 22

function somar(a, b) {
    return a + b
}

/* console.log(somar(4, 5)) */

function criarUmCachorro(nm, age, raca = null, cor) {
    return {
        nome: nm,
        idade: age,
        racaCachorro: raca,
        corCachorro: cor
    }
}

// console.log(criarUmCachorro(
//     'Kled', 
//     2, 
//     'Vira-Lata', 
//     'preto e branco'))

const listaDePessoas = [
    { nome: "Ivan G.", idade: 22 },
    { nome: "Angela Caroline.", idade: 25 },
    { nome: "Fábio Algusto", idade: 29 },
]

console.log(listaDePessoas)

for (let obj of listaDePessoas)
    console.log(obj)