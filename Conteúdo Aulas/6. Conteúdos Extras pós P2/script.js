// CONTEÚDO DE VÍDEO DO DIA 01/05/22:


// GLOBAL:
var nomeMonstro = 'GODZILLA'
let carro = { tipo: 'SUV', modelo: 'BMW X4', preco: 480.000 }
const pi = 3.1415
console.log([ nomeMonstro, carro, pi ])

// BLOCO:
if (10 > 5) {
    const logica = 'Conjunto de padrões que refletem a imagem do universo.'
    console.log(logica) 
}
else {
    console.log(logica)
}

// LOCAL
const areaT = (b,h) => {
    let result = b * h / 2
    return result
}
// console.log(result)

function criarAlunos(nm, idd, crs, sx) {
    const aluno = { nome: nm, idade: idd, curso: crs }
    if (sx == 'M')
        aluno.sexo = 'MASCULINO'
    else if (sx == 'F')
        aluno.sexo = 'FEMININO'
    else {
        aluno.sexo = 'OTHER' 
        const showMessage = ()  => console.log('Pessoa não binária ou máquina.')
        showMessage()
    }
    return aluno
} 

/*
    Folha.js:
    ------------------------------------------------------
    -   1. Escopo Global:                                -
    -                                                    -           
    -   --------------------    -----------------------  -
    -   - 2.Escopo Local:  -  >  - 3. Escopo de Bloco: - -
    -   --------------------    -----------------------  -
    -                                                    -
    -   --------------------    -----------------------  -
    -   - 4.Escopo Local:  -  <  - 4. Escopo de Bloco: - -
    -   --------------------    -----------------------  -
    ------------------------------------------------------
*/

// ----- EXEMPLO DA P1 ----- :
// function foo() {
//     var x
//     z = 8
//     k = 3
//     h = document.querySelector('.banana').innerHTML
//     if (h > 2) {
//         let i = 7
//     }
//     else {
//         k = k + 1
//     }
//     var k     
// }

/* -------- COMO FAZER CURRYING: -------- */

//Sem Currying:
function f1(a,b,c) {
    return a + b + c
}

// Forma 01:
function f2(a) {
    return function f3(b) {
        return function f4(c) {
            return a + b + c
        }
    }
}

// Forma 02:
const x1 = (a) => {
    return x2 = (b) => {
        return x3 = (c) => {
            return a + b + c
        }
    }
}

// Forma 03:
function nm(n) {
    return idd = (i) => {
        return function sx(sx) {
            return nada = () => {
                return {
                    nome: n,
                    idade: i,
                    sexo: sx
                }
            }
        }
    }
}

// Variações confusas e difíceis de ler Lol:
somar = (a,b) => a + b
somar(somar(45,45), somar(20, -300))

function f0() { return (y) => 5 + y }
semNome = () => semNome2 = (y) => y + 5
console.log((y => y + 5)(0))

//----------------------------------------------------
/* ---- ////////////////////////////////////// ---- */
//----------------------------------------------------

const nomes = ['Berthran', 'Julia', 'Jade', 'Andersson', 'Jé', 'Rodolfo', 'Ana']
const nomesCurtos = []
const nomesLongos = []

// --- FOR CLÁSSICO: --- 

function showNomes() {
    for (let index = 0; index < nomes.length; index++) {
        console.log(nomes[index]);
    }
}

function fA() {
    for(let i = 0; i < nomes.length; i++) {
        if (nomes[i].length <= 4)
            nomesCurtos.push(nomes[i])
    }
    console.log(nomesCurtos)
}

// --- FOREACH: ---
function showNomes2() {
    nomes.forEach(nome => console.log(nome))
}

function fB() {
    nomes.forEach(nome => nome.length > 4 ? nomesLongos.push(nome) : null)
    console.log(nomesLongos)
}

// --- FOR OF: ---
const shortNames = []
const longNames = []
function fC() {
    for (let nome of nomes) 
        nome.length <= 4 ? shortNames.push(nome) : longNames.push(nome)
    return { shortNames, longNames }
}

const listaCaes = [
    {
        nome: 'Betowen',
        idade: 10,
        sexo: 'M',
        condicaoRaca: {
            definida: true,
            nomeRaca: 'São Bernardo'
        }
    },
    {
        nome: 'Duke',
        idade: 17,
        sexo: 'M',
        condicaoRaca: {
            definida: true,
            nomeRaca: undefined
        }
    },
    {
        nome: 'Lua',
        idade: 5,
        sexo: 'F',
        condicaoRaca: {
            definida: true,
            nomeRaca: 'Dalmata'
        }
    },
]

function fD() {
    for (let cao of listaCaes)
        console.log(cao)
}

function fE() {
    const males = []
    const females = []
    for(let dog of listaCaes) {
        for(let prop in dog) {
            if (prop == 'sexo')
                dog[prop] == 'M' ? males.push(dog) : females.push(dog)
        }
    }
    return { males, females }
}