const p = ['É', 'um', 'ótimo', 'dia', 'para', 'revisar', 'Javascript']

function ex11p2(vetor) {
    const criarElmnt = (tipoEl) => document.createElement(tipoEl)
    const engolirDiv = (pai, filho) => pai.appendChild(filho)
    const criarTxt = (txt) => document.createTextNode(txt)
    const gerarDadosPalavra = (p, countAa) => {
        const porcentagem = (countAa * 100) / p.length
        return {
            palavra: p,
            letrasAa: countAa,
            porcentagemLetrasAa: `${porcentagem.toFixed(2)}%`
        }
    }

    let table = criarElmnt('table'),
        tr = criarElmnt('tr'),
        th = criarElmnt('th'),
        th2 = criarElmnt('th'),
        th3 = criarElmnt('th')

    engolirDiv(th,criarTxt('Palavra:'))
    engolirDiv(th2,criarTxt('Quantidade de letras A ou a:'))
    engolirDiv(th3,criarTxt('Porcentagem de letras A / a:'))

    engolirDiv(tr,th)
    engolirDiv(tr,th2)
    engolirDiv(tr,th3)
    engolirDiv(table,tr)

    vetor.forEach(word => {
        let c_Aa = 0

        for (let letra of word)
            letra == 'A' || letra == 'a' ? c_Aa += 1 : null

        const dadosPalavra = gerarDadosPalavra(word, c_Aa)
        let new_tr = criarElmnt('tr'),
            new_th = criarElmnt('th'),
            new_th2 = criarElmnt('th'),
            new_th3 = criarElmnt('th')
        
        engolirDiv(new_th,criarTxt(dadosPalavra.palavra))
        engolirDiv(new_th2,criarTxt(dadosPalavra.letrasAa))
        engolirDiv(new_th3,criarTxt(dadosPalavra.porcentagemLetrasAa))
        engolirDiv(new_tr, new_th)
        engolirDiv(new_tr, new_th2)
        engolirDiv(new_tr, new_th3)
        engolirDiv(table, new_tr)
    })
    return table
}

function ex11p3() {
    const btn = document.createElement('button')
    btn.appendChild(document.createTextNode('Executar 11.3'))
    btn.style.margin = '10px 0'
    document.body.append(btn)

    let excuted = false 

    btn.addEventListener('click', () => {
        if (excuted == false) {
            // Por a tabela na DOM:
            document.body.appendChild(ex11p2(p))

            // Dar CSS a tabela:
            const table = document.querySelector('table')
            table.style.border = '1px solid'
            
            const trs = document.querySelectorAll('tr'),
                  ths = document.querySelectorAll('th')

            trs.forEach(tr => tr.style.border = '1px solid')
            ths.forEach(th => th.style.border = '1px solid')

            excuted = true
        }
    })
}
ex11p3()

function ex12() {
    const btn = document.getElementById('btnForm')
    const div = document.getElementById('ex12')
    const input = document.getElementById('input')
    div.style.padding = '10px'
    
    btn.addEventListener('click', () => {
        div.style.backgroundColor = input.value    
    })
}
ex12()

function ex13() {
    const div = document.getElementById('dv1')
    setInterval(() => {
        if (div.style.backgroundColor === 'yellow')
            div.style.backgroundColor = 'red'
        else if (div.style.backgroundColor === 'red')
            div.style.backgroundColor = 'yellow'
        else 
            div.style.backgroundColor = 'yellow'
    }, 400)
}
ex13()

