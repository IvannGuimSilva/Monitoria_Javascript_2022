// ------------------------------------------------ 
//     ROTEIRO + IDEIAS PARA AULA 18/03/2022: 
// ------------------------------------------------
// Arrow Functions (Lambda Func) (Funções parte 2), 
// Currying e High Order Functions.
// ---- //////// ----

// EX 1. Exemplo de função:
function somar1(a,b) {
    return a + b
}



// EX 2. Exemplo de arrow function:
const somar2 = (a,b) => a + b
// const somar2 = (a,b) => { return a + b }

console.log(somar1(22,22))
console.log(somar2(22,22))



// EX 3. Combinando funções numa high order function (Função de Alta Ordem):7
const somar = (a,b) => a + b
const dividir = (a,b) => a / b 
const subtrair = (a,b) => a - b 
const multiplicar = (a,b) => a * b

somar(10,5) // funciona mas não MOSTRA NA TELA...
console.log(somar(20,30))

// observe a mágica desse tipo de função:

somar(somar(2,2), somar(2,2))
console.log(somar(somar(2,2), somar(2,2)))
console.log(subtrair(somar(2,2), somar(2,2)))
console.log(multiplicar(somar(2,2), somar(2,2)))
console.log(dividir(somar(2,2), somar(2,2)))

// combinações e variações infinitas...

subtrair(somar(10,10), dividir(999,3))
multiplicar(dividir(90,3), somar(200,5))
somar(multiplicar(dividir(90,3), somar(200,5)), 300)

// Você podde associar esses processos a um nome, assim:

const conta1 = subtrair(somar(10,10), dividir(999,3))
const conta2 = multiplicar(dividir(90,3), somar(200,5))
const conta3 = somar(multiplicar(dividir(90,3), somar(200,5)), 300)

// e ficar vendo ou usando eles, assim: 

console.log('Resultado 1: ' + conta1)
console.log('Resultado 2: ' + conta2)
console.log('Resultado 3: ' + conta3)



// EX 4. Arrow functions + High Order Func.
// usadas  em processos:

const alunos = []

const criarAluno = (nm, age, sx, nt) => {
    return { nome: nm, idade: age, sexo: sx, nota: nt }
}
console.log(criarAluno('Ivan', 22, 'M'))

const addAluno = (lista, aluno) => {
    lista.push(aluno)
    return lista
}

// console.log(
//     addAluno(
//         alunos, 
//         criarAluno('teste', 0, 'ANOTHER')
//     )
// )

addAluno(alunos, criarAluno('Ivan', 22, 'M', 10.0))
addAluno(alunos, criarAluno('Anthonio', 62, 'M', 10.0))
addAluno(alunos, criarAluno('Angela', 25, 'F', 8.0))
addAluno(alunos, criarAluno('Jonathas', 31, 'M', 5.0))
addAluno(alunos, criarAluno('Matheus', 31, 'M', 6.0))

const bianca = criarAluno('Bianca', 24, 'F', 4.5)
addAluno(alunos, bianca)

console.log(alunos)


const avaliarAlunos = (lista) => {
    const reprovados = []
    const aprovados = []

    for (let aluno of lista) {
        for (let atributo in aluno) {
            if (atributo == 'nota') {
                if (aluno[atributo] >= 6)
                    aprovados.push(aluno)
                else if (aluno[atributo] <= 5)
                    reprovados.push(aluno)
            }
        }
    }

    return { reprovados, aprovados }
}

const avaliarEscola = (resultado) => {
    let totalAlunos = 0
    let totalreprovados = 0
    let totalAprovados = 0

    resultado.aprovados.forEach(aprovado => {
        totalAlunos++ 
        totalAprovados++
    })

    resultado.reprovados.forEach(reprovado => {
        totalAlunos++ 
        totalreprovados++
    })

    const porcent_aprovados = (totalAprovados * 100) / totalAlunos
    const porcent_reprovados = (totalreprovados * 100) / totalAlunos

    if (porcent_aprovados <= 65)
        console.log(`Escola REPROVADA - taixa aprovados inferior à 65%\nTaixa aprovados: ${porcent_aprovados.toFixed(2)}%`)
    else if (porcent_aprovados >= 65)
        console.log(`Escola aprovada!\nTaixa aprovados: ${porcent_aprovados.toFixed(2)}%\nTaixa reprovados: ${porcent_reprovados.toFixed(2)}%`)
}

avaliarEscola(avaliarAlunos(alunos))

/* Criando lista nova pra ficar óbvio: */

const novaLista = []
addAluno(novaLista, criarAluno('a1', 22, 'M', 10.0))
addAluno(novaLista, criarAluno('a2', 62, 'M', 10.0))
addAluno(novaLista, criarAluno('a3', 25, 'F', 8.0))
addAluno(novaLista, criarAluno('a4', 25, 'F', 2.0))
avaliarEscola(avaliarAlunos(novaLista))



// EX 5. Currying:

const func1 = (a,b) => {
    return (c) => {
        if (c != null || c != undefined)
            return a * b - c
        else
            return a + b
    }
}

console.log(func1(10,10,10)) // Está ERRADO, jamais currying escreva assim!!!
console.log(func1(10,10,10)()) // forma correta nº1
console.log(func1(10,10,10)(10)) // forma correta nº2


function func2(a,b) {
    return function(c) {
        if (c != null || c != undefined)
            return a * b - c
        else
            return a + b
    }
}

console.log(func2(10,10,10)())
console.log(func2(10,10,10)(10))


const func3 = (a) => {
    return (b,c) => (d,e,f) => { return a + b + c + d + e + f }
}

console.log(func3()()()) // Dá erro (NaN - NOT A NUMBER) se vc ñ preparar o programa direito.
console.log(func3(1)(2,3)(4,5,6))