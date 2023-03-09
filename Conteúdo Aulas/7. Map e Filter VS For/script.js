const jogos = [
    { nome: 'Metal Gear Solid 4', empresa: 'Konami', nota: 9.8 },
    { nome: 'Pokémon Heart Gold', empresa: 'Game Freak', nota: 9.5 },
    { nome: 'Pokémon Platinum', empresa: 'Game Freak', nota: 9.5 },
    { nome: 'Metal Gear Rising', empresa: 'Konami', nota: 8.0 },
    { nome: 'Castlevania: Order of Ecclesia', empresa: 'Konami', nota: 10.0 },
    { nome: 'Metroid Dread', empresa: 'MercurySteam', nota: 10.0 },
    { nome: 'Super Mario World', empresa: 'Nintendo', nota: 6.0 },
    { nome: 'Sonic and the Black Knight', empresa: 'Nintendo', nota: 4.0 },
    { nome: 'Battlefield 3', empresa: 'alguém', nota: 5.5 },
    { nome: '', empresa: 'KONAMI' },
    { nome: 'Castlevania 3', empresa: 'konami' },
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

// let list1 = jogosKonami(jogos)
// console.log(list1)
// console.log(jogos)

const alunos = [
    { id: 2, nome: 'Abel', nota: 9.0 },
    { id: 0, nome: 'Betowen', nota: 5.8 },
    { id: -1, nome: 'Carlos', nota: 6.0 },
    { id: null, nome: 'Danielle', nota: 7.8 },
    { id: 5, nome: 'Elias', nota: 3.0 },
    { id: NaN, nome: 'bugTrojan#34565', nota: 1.0 },
    { id: 1, nome: 'Ivan', nota: 9.5 },
    { id: null },
    { id: undefined },
    { id: 3, nome: 'Angela', nota: 4.0 },
    { id: 10.2, nome: 'Ana', nota: 2.0 },
]

const pegarReprovados = list => {
    let newList = list.filter(aluno => aluno.nota < 6)
    return newList
}

// console.log(pegarReprovados(alunos))

const pegarNomeReprovados = lista => {
    const newList = lista.map(alunoR => {
        const nmRpro = {}
        nmRpro.nome = alunoR.nome 
        return nmRpro
    })
    return newList
}

// let nomeReprovados =  pegarNomeReprovados(pegarReprovados(alunos))
// console.log(nomeReprovados)

const filtrarID = obj => {
    const eNumero = () => 'id' in obj  && typeof(obj.id) === 'number' && !isNaN(obj.id)
    const ePositivoInt = () => obj.id >= 0 && obj.id % 1 == 0
    if(eNumero() && ePositivoInt())
        return true
    else 
        return false
}

const filtrarIdsRuins = (list, filterID) => {
    let newList = list.filter(filterID)
    return newList
}

// console.log(filtrarIdsRuins(alunos, filtrarID))
// console.log(alunos)
// console.log(pegarReprovados(filtrarIdsRuins(alunos, filtrarID)))

// const repro = pegarReprovados(filtrarIdsRuins(alunos, filtrarID))
// console.log(pegarNomeReprovados(repro))

const competidores = [
    { nome: 'Adam', nota: 1.5 },
    { nome: 'Joshua', nota: 10 },
    { nome: 'Davi', nota: 8.5 },
    { nome: 'Peter', nota: 4.1 },
    { nome: 'Noah', nota: 5.7 },
    { nome: 'Josh', nota: 3.0 }
]

const organizPessoas = list => {
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

console.log(competidores)
organizPessoas(competidores)
console.log(competidores)