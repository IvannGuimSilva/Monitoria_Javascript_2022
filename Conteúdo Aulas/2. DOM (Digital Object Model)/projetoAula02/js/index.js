function crieUmaDiv() {
    const zonaPrincipal = document.getElementById('zona-principal')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'divCriada')

    const pDiv = document.createElement('p')
    pDiv.innerText = 'Nova div criada :O'

    newDiv.appendChild(pDiv)
    newDiv.style.backgroundColor = 'tomato'
    newDiv.style.fontFamily = 'monospace'
    newDiv.style.color = '#fff'
    newDiv.style.padding = '10px'
    newDiv.style.marginTop = '10px'

    zonaPrincipal.appendChild(newDiv)
}

function criarListaObjs() {
    const zonaPrincipal = document.getElementById('zona-principal')
    const alunosSI = [
        { nome: 'Ivan', idade: 22, sexo: 'M' },
        { nome: 'Sabrina', idade: 20, sexo: 'F' },
        { nome: 'Henry', idade: 19, sexo: 'M' },
        { nome: 'Everson', idade: 18, sexo: 'M' },
        { nome: 'Eduardo', idade: 18, sexo: 'M' }
    ]

    const novaLista = document.createElement('ul')
    novaLista.style.paddingInlineStart = '0px'
    novaLista.style.listStyleType = 'none'

    for(let aluno of alunosSI) {
        const newItemList = document.createElement('li')
        newItemList.setAttribute('class', 'alunosSI')
        newItemList.style.backgroundColor = 'lightblue'
        newItemList.style.marginTop = '10px'
        newItemList.style.padding = '5px 15px 5px 15px'
        newItemList.style.fontFamily = 'monospace'
        newItemList.style.fontSize = '16px'
        newItemList.style.borderStyle = 'dashed'
        newItemList.style.borderWidth = '2px'
        newItemList.style.borderRadius = '2px'

        for (let caract in aluno) {
            if (caract == 'nome') {
                const p = document.createElement('p')
                p.innerText = `Nome: ${aluno[caract]}`
                newItemList.appendChild(p)
            }
            else if (caract == 'idade') {
                const p = document.createElement('p')
                p.innerText = `Idade: ${aluno[caract]}`
                newItemList.appendChild(p)
            }
            else if (caract == 'sexo') {
                const p = document.createElement('p') 
                if (aluno[caract] == 'M') {
                    p.innerText = `Sexo: Masculino`
                    newItemList.appendChild(p)
                }
                else if (aluno[caract] == 'F') {
                    p.innerText = `Sexo: Feminino`
                    newItemList.appendChild(p)
                }
            }
        }
        novaLista.appendChild(newItemList)
    }
    zonaPrincipal.appendChild(novaLista)
}