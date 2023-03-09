/*
    EX 01: Implemente uma função triplo(f,x) que recebe
    f e um valor x. Esta função deverá retornar a aplicação de f 3 vezes
    no valor x. Crie uma expressão de teste para a função em questão 
    e indique por comentário a saída correspondente.
*/

const f = vl => vl

const triplo = (f,x) => {
    let c = 0
    while(c < 3) 
    { f(x); c++ }
}

console.log(triplo(f, 'Valor Qualquer')) // R: Undefined
console.log(triplo(v => v, 'Valor Qualquer')) // R2: Undefined

/*/////////////////////////////////////////////////////////////////////////*/

/*
    EX 02: Marque TODAS as alternativas que são iguais a 5 (número):
*/

// (x => x + "1")(4) -> NÃO
// (x => 5)("oi mundo") -> 5
// (x => x + 1)(4) -> 5
// (x => 5)(2) -> 5
// (x => 5) -> NÃO

/*/////////////////////////////////////////////////////////////////////////*/

/*
    EX 03: Implemente uma função que receba um objeto: 

    { 1: 'palavra 1', 2: 'palavra 2', 3: 'palavra 3' }

    e retorne um novo objeto de forma ao qual os índices sejam 
    o triplo do objeto mencionado, e seus valores string estejam em
    ordem reversa. É proibído qualquer uma das estruturas a seguir:
    for, do, while e forEach.
*/

const obj = { 
    1: 'palavra 1', 
    2: 'palavra 2', 
    3: 'palavra 3' 
}

const ex03 = (obj) => {
    const triplo = vl => parseInt(vl) * 3
    const reverso = str => str.split('').reverse().join('')
    let nwObj = {}
    Object.keys(obj)
        .map(prop => nwObj[triplo(prop)] = reverso(obj[prop]))
    return nwObj
}

console.log(ex03(obj))
console.log(obj)

/*/////////////////////////////////////////////////////////////////////////*/

/*
    EX 04: Indique as alternativas verdadeiras. 
*/

// 4.1) Filter precisa de um predicado como parametro ? R: SIM

// 4.2) Reduce é o equivalente da progra. funcional a contadores 
// e acumuladores? R: SIM

const idades = [10,23,44,70,90]
const somaidades = idades.reduce((antes,atual) => antes + atual)
console.log(somaidades)

// 4.3) lista1.map(x => x) deve sempre ser igual a lista1? R: SIM

console.log(['x','y','z'].map(x => x))

// 4.4) Map é o mesmo que forEach? 
// R: NÃÃOOO, map cria um clone, forEach muda o original

let a = [1,2,3]
let b = [3,2,1]

a.forEach((num, idx) => a[idx] = num * 3)
console.log(a)
b.map(idx => idx * 3)
console.log(b)

// 4.5) Filter é uma função de alta Ordem? R: SIM

const numeros = [0,1,1.1,1.2,2,3,4,5]
const maiorQdois = (num) => num > 2 ? num : null 
const lista2 = numeros.filter(vl => maiorQdois(vl)) // FA(FB)
console.log(lista2) 
console.log(numeros) 

/*/////////////////////////////////////////////////////////////////////////*/

/*
    EX 05: Faça uma função que retorne o nome de todos os cursos
    abaixo do ícone do site da Fatec. 
*/


const ex05 = async () => {
    let list = []
    await fetch('https://fatecrl.edu.br/')
    .then(dados => dados.text())
    .then(result => {
        const dom = new DOMParser()
        const doc = dom.parseFromString(result, 'text/html')
        const cursos = doc.body.querySelectorAll('.home-course-title')
        cursos.forEach(idx => list.push(idx.innerHTML))
    })
    return list
}

console.log(ex05())

/*/////////////////////////////////////////////////////////////////////////*/

/*
    EX 07: Ao clicar 2x no botão com id = 'b1',
    todas as divs deverão sumir e todos os parágs. deverão
    ter sua cor mudada p/ AMARELO. USE Jquery!!!
*/


const ex07 = () => {
    let count = 0
    const btn = $('#b1')
    $(btn).click(function() {
        count < 2 ? count++ : null
        if (count == 2) {
            $('div').css('display','none')
            $('p').css('background-color','yellow')
        }
    })

}

// ex07()

/*/////////////////////////////////////////////////////////////////////////*/

/*
    EX 08: Ao clicar 2x no botão com id = 'b1',
    todas as divs deverão sumir e todos os parágs. deverão
    ter sua cor mudada p/ AMARELO. NÃO USE Jquery!!!
*/

const ex08 = () => {
    const btn = document.getElementById('b1')
    let count = 0
    btn.addEventListener('click', () => {
        count < 2 ? count++ : null 
        if (count == 2) {
            const divs = document.querySelectorAll('div')
            const ps = document.querySelectorAll('p')
            divs.forEach(div => div.style.display = 'none')
            ps.forEach(p => p.style.backgroundColor = 'yellow')
        }
    })
}

ex08()
