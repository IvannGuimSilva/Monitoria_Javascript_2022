const setPilha = (arg) => {
    return Array.isArray(arg) === true ?
        arg.map(i => i) : [arg]
}

const getPilha = (original = []) => {
    const hasOriginal = original !== null || original !== undefined
    const isArray = Array.isArray(original) === true 
    if (hasOriginal) 
        return isArray ? original.map(i => i) : null
}

const add = (elemnt, stack = []) => {
    if (Array.isArray(stack) === true) {
        let newStack = getPilha(stack)
        newStack.push(elemnt)
        return newStack 
    } else
        return 'Add into a list!'
}

const getLength = (stack = []) => {
    return Array.isArray(stack) === true ? 
        stack.length : null
}

const remove = (typedIdx, stack = []) => {
    const stckIsList = Array.isArray(stack) == true
    const tpdIdxEmpty = typedIdx === null || typedIdx === undefined
    const tpdIdxIsNum = typeof(typedIdx) === 'number'
    const pushIdx = (argIdx, elmnt, idx) => argIdx != idx ? elmnt : null
     
    if (tpdIdxEmpty && stckIsList)
        return stack.slice(0,stack.length - 1)
    if (tpdIdxIsNum && stckIsList)
        return stack.filter((elmnt, idx) => pushIdx(typedIdx, elmnt, idx))
}

const pokemons = [
    { nome: 'Bulbassauro', tipo: ['Grama'] },
    { nome: 'Charmander', tipo: ['Fogo'] },
    { nome: 'Squirtle', tipo: ['Água'] }
]

let pilha0 = setPilha(pokemons)
let pilha1 = add({ nome: 'Joteon', tipo: ['Elétrico'] }, pilha0)
let pilha2 = add({ nome: 'Growlithe', tipo: ['Fogo'] }, pilha1)
let pilha3 = remove(null, pilha2)
pilha3 = remove(null, pilha3)
pilha3 = remove(null, pilha3)
console.table(pilha3)
let pilha4 = add({ nome: 'Charmeleon', tipo: ['Fogo'] }, pilha3)
console.table(pilha4)
pilha4 = remove(0, pilha4)
console.table(pilha4)
pilha4 = add({ nome: 'Charizard', tipo: ['Fogo','Voador'] }, pilha4)
console.table(pilha4)
console.table(pokemons)

const finalForms = [
    { nome: 'Venossauro', tipo: ['Grama'] },
    { nome: 'Charizard', tipo: ['Fogo','Voador'] },
    { nome: 'Blastoise', tipo: ['Água'] }
]

const addEachIdxOfArray = (addedList, argStack) => {
    const isArray = (original) => Array.isArray(original) === true
    return isArray(addedList) && isArray(argStack) ?
        argStack.concat(...addedList) 
        : null
}

let pExtra = addEachIdxOfArray(finalForms, pokemons)
console.table(pExtra)
console.table(pokemons)

//////////> -- PROVANDO QUE SÃO FUNÇÕES DETERMINÍSTICAS: -- <///////////|

let nTentativas = 1
let nmFulano = 'José'

const mudaNome = () => {
    setInterval(() => {
        nmFulano === 'José' ? nmFulano = 'Elias' : nmFulano = 'José'
        if (nTentativas > 3)
            nmFulano = 'Cleison'
        if (nTentativas > 8)
            nmFulano = 'Atila'
    } , 500 /*100*/)
} 

setInterval(() => {
    mudaNome()
    console.log('\nNº Tentativa: ' + nTentativas + ' | NOME ATUAL: ' + nmFulano)
    const p1 = ['A']
    console.log('(pilha 1): [' + p1 + ']')
    const p2 = add('B', p1)
    console.log('(pilha 2): [' + p2 + ']')
    const p3 = add('C', p2)
    console.log('(pilha 3): [' + p3 + ']')
    const p4 = add('D', remove(2, p3))
    console.log('(pilha 4): [' + p4 + ']')
    console.log('(pilha 3): [' + p3 + ']')
    console.log('(pilha 2): [' + p2 + ']')
    console.log('(pilha 5): [' + p1 + ']')
    nTentativas++
}, 600 /*1*/)




// class Pilha {
//     constructor(argument) {
//         this.pilha = []
//         if (argument != null || argument != undefined)
//             this.setPilha(argument)
//         else 
//             return null
//     }

//     setPilha(argument) {
//         if (Array.isArray(argument) === false)
//             this.pilha.push(argument)
//         else 
//             argument.forEach(elemnt => this.pilha.push(elemnt))
//     }

//     getPilha() { return this.pilha } 

//     getLength() { return this.pilha.length }

//     add(elmnt) {
//         this.pilha.push(elmnt)
//         return this.pilha
//     }

//     remove(typedIndex) {
//         const noArgumentTyped = () => typedIndex == null || typedIndex == undefined
//         if (noArgumentTyped) {
//             this.pilha.pop()
//             return this.pilha
//         }
//         else
//             this.pilha.splice(typedIndex, 1)
//             return this.pilha
//     }

//     removeAll() {
//         this.pilha = []
//         return this.pilha
//     }
// }

// const pessoas2 = [
//     { nome: 'Abel', sexo: 'M', nota: 9.0 },
//     { nome: 'Betowen', sexo: 'M', nota: 5.8 },
//     { nome: 'Carlos', sexo: 'M', nota: 6.0 },
//     { nome: 'Danielle', sexo: 'F', nota: 7.8 }
// ]

// const numeros = [20,54,77,76,11]

// const p1 = new Pilha(pessoas2)
// p1.setPilha(pessoas2)
// console.log('\nComprimento Pilha: ', p1.getLength())
// console.log(p1.getPilha())
// p1.remove(3)
// p1.remove(2)
// console.log('\nComprimento Pilha: ', p1.getLength())
// console.log(p1.getPilha())
// p1.add({ id: 99, nome: 'Novo', nota: 10 })
// console.log('\nComprimento Pilha: ', p1.getLength())
// console.log(p1.getPilha())
// p1.remove()
// console.log('\nComprimento Pilha: ', p1.getLength())
// console.log(p1.getPilha())
// p1.remove()
// console.log('\nComprimento Pilha: ', p1.getLength())
// console.log(p1.getPilha())
