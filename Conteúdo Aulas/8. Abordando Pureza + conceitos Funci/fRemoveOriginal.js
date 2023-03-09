const remove = (typedIdx, stack = []) => {
    const stckIsList = Array.isArray(stack) == true
    const tpdIdxEmpty = typedIdx === null || typedIdx === undefined
    const tpdIdxIsNum = typeof(typedIdx) === 'number'
    const pushIdx = (argIdx, elmnt, idx) => argIdx != idx ? elmnt : null
    if (tpdIdxEmpty && stckIsList) {
        let newStack = []
        for (let i = 0; i < stack.length - 1; i++)
            newStack.push(stack[i])
        return newStack
    }
    if (tpdIdxIsNum && stckIsList)
        return stack.filter((elmnt, idx) => pushIdx(typedIdx, elmnt, idx))
}

const a = ['A','B,','C','D','E']
const b = ['E','F,','G','H','I']

console.log(a.splice(0,a.length - 1)) // pega parte do array, do 1º (0) até o penúltimo index (lista.length - 1).
console.log(a) // ...porém destrói o array original :P -> Impuro

console.log(b.slice(0,b.length - 1)) // pega parte do array, do 1º até o penúltimo index.
console.log(b) // deixa o original intacto :D -> Puro

console.log(remove(2,b))
console.log(b)