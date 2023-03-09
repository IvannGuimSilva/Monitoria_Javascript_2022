// Roteiro de idéias de conteúdo de apoio EXTRA
// idealizado durante os dias 09 e 10 de abril:

/* -------- DIFERÊNÇAS DE ESCOPO: -------- */

/* 
    Aqui eu irei dar teoria de uma maneira bem
    reflexiva pra fazer o aluno pensar o porquê 
    de as coisas serem assim :P 
*/

// Global / (que existe no arquivo.js inteiro):

var nomePessoa = 'João Silva'
let carro = { modelo: 'BMW X4', tipo: 'SUV', preco: 480.000 }
const pi = 3.1415
console.log([nome,carro,pi])



// Escopo de Bloco / (que só existe dentro de uma condição):

if (10 > 5) { 
    let a = 'banana'
    console.log(a)
}
else if (5 > 10) {
    let b = 'mamão'
    console.log(b)
}



// Escopo Local / (que só existe dentro de uma função):

function areaT(b,h) { let r = b * h / 2; return r }
console.log(areaT)
// console.log(r) Essa variável só existe dentro da função



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

const listaT = [
    { l1: 7, l2: 10, l3: 5 },
    { l1: 3, l2: 6, l3: 3 },
    { l1: 10, l2: 11,l3:  11 },
    { l1: 17, l2: 10, l3: 5 },
    { l1: 300, l2: 6, l3: 3 },
    { l1: 10, l2: 111,l3:  1140 }
]
console.log(listaT)

function Tvalido(a,b,c) 
{
    if (c + b <= a || c + a <= b || b + a <= c)
        return false
    else 
        return true
}

function avaliarT(listaT) {
    listaGerada = []
    listaT.forEach((t, indexT) => {
        let nT = indexT + 1
        Tvalido(t.l1,t.l2,t.l3) == true ? 
            listaGerada.push(`${nT}º Triangulo válido.`) :
            listaGerada.push(`${nT}º Triangulo inválido!`) 
    })
    return listaGerada
}

// ----- EXEMPLO DA P1 ----- :

// function foo() {
//     var x
//     z = 8
//     k = 3
//     h = document.querySelector('.banana').innerHTML
//     if (h > 2) {
//         let i = 7
//         console.log(i)
//     }
//     else {
//         k = k + 1
//         console.log(k)
//     }
//     var k
//     console.log(k)
// }


/* -------- COMO FAZER CURRYING: -------- */

// Forma 01:
function x(a) {
    return function y(b) {
        return function z(c) {
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
function nome(n) {
    return idade = (i) => {
        return function sexo(s) {
            return { nome: n, idade: i, sexo: s }
        }
    }
}

// Variações confusas e difíceis de ler Lol:

somar = (a,b) => a + b // LEMBRE-SE Q VC PODE RETORNAR COISAS ASSIM
dividir = (a,b) => a / b // LEMBRE-SE Q VC PODE RETORNAR COISAS ASSIM
somar(dividir(22,30), somar(7,60)) // E Q VC PODE FAZER ISSO TBM

function f0() { return (y) => 5 + y }
f1 = (a) => 5 + a
semNome = () => { return semNome2 = (y) => { return y + 5 }}
console.log(semNome()(0))
console.log((y => y + 5)(0))

//----------------------------------------------------
/* ---- ////////////////////////////////////// ---- */
//----------------------------------------------------

// Roteiro de idéias de conteúdo 
// idealizado durantes os dias 12 e 13 de abril:

const nomes = ['Berthran', 'Julia', 'Jade', 'Andersson', 'Jé', 'Rodolfo', 'Ana']
const nomesCurtos = []
const nomesLongos = []

// --- FOR CLÁSSICO: --- 

function showNomes() {
    for (let index = 0; index < nomes.length; index++) {
        console.log(nomes[index])
    }
}

function fA() {
    for (let i = 0; i < nomes.length; i ++) {
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
    nomes.forEach(nome => { 
        if(nome.length > 4)
            nomesLongos.push(nome)
    })
    console.log(nomesLongos)
}

// --- FOR OF: ---

const shortNames = []
const longNames = []

function fC() {
    for(let nome of nomes)
        nome.length <= 4 ? shortNames.push(nome) : longNames.push(nome)
    return { shortNames, longNames }
}


const listaCaes = [
    { 
        nome: 'Betoven', 
        idade: 10, 
        sexo: 'M', 
        condicaoRaca: { 
            indefinida: false, 
            nomeRaca: 'São Bernardo'
        }
    },
    { 
        nome: 'Duke', 
        idade: 17, 
        sexo: 'M', 
        condicaoRaca: { 
            indefinida: true, 
            nomeRaca: undefined
        }
    },
    { 
        nome: 'Lua', 
        idade: 6, 
        sexo: 'F', 
        condicaoRaca: { 
            indefinida: false, 
            nomeRaca: 'Dalmata'
        }
    },
]

function fD() {
    for(let cao of listaCaes)
        console.log(cao)
}


// --- FOR IN: ---


function fE() {
    const machos = []
    const femeas = []
    for (let cao of listaCaes) {
        for(let prop in cao) {
            if(prop == 'sexo')
                cao[prop] == 'M' ? machos.push(cao) : femeas.push(cao) 
        }
    }
    return { machos, femeas }
}