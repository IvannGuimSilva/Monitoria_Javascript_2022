const listaT = [
    { l1: 0, l2: 0, l3: 0 },
    { l1: 7, l2: 10, l3: 5 },
    { l1: 3, l2: 6, l3: 3 },
    { l1: 10, l2: 11, l3:  11 },
    { l1: 17, l2: 10, l3: 5 },
    { l1: 300, l2: 6, l3: 3 },
    { l1: 10, l2: 111, l3:  1140 }
]

function validateT(a,b,c) {
    if (c + b <= a || c + a <= b || b + a <= c)
        return false
    else 
        return true
}

function avaliarTList(listaT) {
    const listaGerada = []
    listaT.forEach((t, indexT) => {
        let nT = indexT + 1
        validateT(t.l1, t.l2, t.l3) === true ?
            listaGerada.push(`${nT}º Triangulo é OK.`) :
            listaGerada.push(`${nT}º Triangulo é INVÁLIDO.`)
    })
    return listaGerada
}