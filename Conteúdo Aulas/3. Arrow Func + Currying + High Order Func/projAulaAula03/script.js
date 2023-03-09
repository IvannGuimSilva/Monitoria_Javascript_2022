function somar1(a,b) {
    return a + b
}

const somar2 = (a,b) => {
    return a + b
}


const somar = (a,b) => a + b
const subtrair = (a,b) => a - b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b

// console.log(somar(somar(22,20), somar(19,18)))
// console.log(somar(subtrair(20,3),dividir(99,14)))
somar(dividir(100,1),dividir(4,5))

const vlSomaIddAlunos = somar(somar(somar(22,20),somar(19,18)), somar(19,18))
// console.log('Soma da idade dessa sala: ' + vlSomaIddAlunos)


const alunosSI = []

const criarAluno = (nm, age, sx, grade) => {
    return {
        nome: nm,
        idade: age,
        sexo: sx,
        nota: grade
    }
}
// console.log(criarAlunoSI('Ivan', 22, 'M', 10.0))

const addAluno = (lista, aluno) => {
    lista.push(aluno)
    return lista
}

addAluno(alunosSI, criarAluno('Ivan', 22, 'M', 10.0))
addAluno(alunosSI, criarAluno('Sabrina', 20, 'F', 8.5))
addAluno(alunosSI, criarAluno('Henry', 19, 'M', 9.5))
addAluno(alunosSI, criarAluno('Eduardo', 41, 'M', 3.1))
addAluno(alunosSI, criarAluno('Letícia', 30, 'F', 0))
addAluno(alunosSI, criarAluno('Robô', 0, 'ANOTHER', 11.0))

// console.log(alunosSI)

const avaliarAlunos = (lista) => {
    const aprovados = []
    const reprovados = []

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

    return { aprovados, reprovados }
}


const msgAvbaliacao = (opcao, nmCurso, prtgApro, prtgRepro) => {
    switch(opcao) {
        default:
        case 1:
            console.log(`\nCURSO: ${nmCurso}`)
            console.log(`\nFatec aprovada! - Taxa de aprovados: ${prtgApro.toFixed(2)}%`)
            console.log('\n')
            break
        case 2:
            console.log(`\nCURSO: ${nmCurso}`)
            console.log(`\nFatec REPROVADA! - Taxa de reprovados: ${prtgRepro.toFixed(2)}%`)
            console.log('\n')
            break
    }
}


const avaliarFatec = (objResult, nmCurso) => {
    let totalAlunos = 0 
    let totalRepro = 0
    let totalAprov = 0

    objResult.aprovados.forEach(aprov => {
        totalAprov++
        totalAlunos++
    })

    objResult.reprovados.forEach(reprov => {
        totalRepro++
        totalAlunos++
    })

    const prtgAprovados = (totalAprov * 100) / totalAlunos
    const prtgReprovados = (totalRepro * 100) / totalAlunos

    if (prtgAprovados >= 65)
        msgAvbaliacao(1, nmCurso, prtgAprovados, prtgReprovados)
    else if (prtgReprovados >= 50)
        msgAvbaliacao(2, nmCurso, prtgAprovados, prtgReprovados)
}

// EX 1:
const resultAv = avaliarAlunos(alunosSI)
// avaliarFatec(resultAv, 'Sistemas para Internet')


// EX 2:
const alunosADS = []

addAluno(alunosADS, criarAluno('a1', 1, 'M', 10))
addAluno(alunosADS, criarAluno('a2', 1, 'M', 10))
addAluno(alunosADS, criarAluno('a3', 1, 'M', 3))
addAluno(alunosADS, criarAluno('a4', 1, 'M', 1))
addAluno(alunosADS, criarAluno('a5', 1, 'M', 0))
// avaliarFatec(avaliarAlunos(alunosADS), 'Análise e Desenvolvimento de Sistemas')


// CURRYING:

const funcX = (a,b) => {
    return (c) => {
        return a + b + c
    }
}

console.log(funcX(1,2)(3))

const funcY = () => {
    return(a,b) => a + b
}

console.log(funcY()(10,15))

function funcZ(a,b) {
    return function(c) {
        if (c != null || c != undefined)
            return a * b - c 
        else 
            return a + b
    }
}

// console.log(funcZ(5,5)) // NÃO ESCREVA ASSIM, TÁ ERRADO
console.log(funcZ(5,5)()) // Forma correta 1 :D
console.log(funcZ(5,5)(5)) // Forma correta 2 :D

const funcW = (a) => {
    return (b,c) => (d,e) => a + b + c + d + e
}
console.log(funcW(1)(1,1)(1,1))