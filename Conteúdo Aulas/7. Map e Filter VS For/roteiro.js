// Roteiro de idéias de conteúdo de apoio:
// ideias testadas, descartadas, etc durante os 
// dias 07/05/22 e 08/05/22:

const jogos = [
    { nome: 'Metal Gear Solid 4', empresa: 'Konami', nota: 9.8 },
    { nome: 'Pokemon Black & White', empresa: 'Game Freak', nota: 8.0 },
    { nome: 'Pokemon Platinum', empresa: 'Game Freak', nota: 9.5 },
    { nome: 'Metal Gear Rising', empresa: 'Konami', nota: 7.5 },
    { nome: 'Castlevania: Order of Ecclesia', empresa: 'Konami', nota: 10.0 },
    { nome: 'Metroid Dread', empresa: 'MescurySteam', nota: 10.0 }
]

const jogosKonami = (list) => {
    let outros = 0
    const result = list.filter(jogo => {
        if (jogo.empresa.toUpperCase() == 'KONAMI')
            return jogo
        else {
            outros++ 
            return 
        }
    })
    return { jogosKonami: result, outrosJogos: outros }
}

// let lista = jogosKonami(jogos) 
// console.log(lista.jogosKonami)
// console.log(jogos)

const alunos = [
    { id: 2 ,nome: 'Abel', nota: 8.75 },
    { id: -1 ,nome: 'Betowen', nota: 5.75 },
    { id: 12.2 ,nome: 'Carlos', nota: 10.0 },
    { id: null ,nome: 'Danielle', nota: 6.0 },
    { id: 3 ,nome: 'Elias', nota: 3.1 },
    { id: 0 ,nome: 'Felipe', nota: 4.5 },
    { id: NaN ,nome: 'Gustavo', nota: 5.8 },
    { id: 1 ,nome: 'Ivan', nota: 9.5 },
    { id: null },
    { },
    { id: undefined }
]

const pegarReprovados = lista => {
    const newList = lista.filter(aluno => aluno.nota < 6)
    return newList
}

const pegarNomeReprovados = lista => {
    const newList = lista.map(alunoR => {
        const nmRepro = {}
        nmRepro.nome = alunoR.nome
        return nmRepro
    })
    return newList
}

const filtrarPorID = (obj) => {
    const eNumero = () => 'id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)
    const ePositivo = () => obj.id >= 0 && obj.id % 1 == 0
    if(eNumero() && ePositivo())
        return true 
    else
        return false
}

// let l1 = pegarReprovados(alunos)
// let l2 = pegarNomeReprovados(l1)
// console.log(l1)
// console.log(l2)
// console.log(alunos)

const filtrarIdsRuins = (lista, filterByID) => {
    let newList = lista.filter(filterByID)
    return newList
}

// console.log(filtrarIdsRuins(alunos, filtrarPorID))
// console.log(alunos)

const alunos2 = [
    { nome: 'Abel', nota: 8.0 },
    { nome: 'Betowen', nota: 5.5 },
    { nome: 'Carlos', nota: 3.0 },
    { nome: 'Danielle', nota: 10.0 },
]

const organizarPorNota = list => {
    for (let i = 0; i < list.length; i++) {
        for(let j = i + 1; j < list.length; j++) {
            let aux = null
            if (list[i].nota < list[j].nota) {
                aux = list[i]
                list[i] = list[j]
                list[j] = aux
            }
        }
    }
    return list
}

// console.log(alunos2)
// organizarPorNota(alunos2)
// console.log(alunos2)