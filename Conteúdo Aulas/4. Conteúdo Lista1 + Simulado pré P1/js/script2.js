// --------------------------------------------------
// Respondendo Lista de Exercícios 1 do Prof. Garcia
// --------------------------------------------------

// Ex 01:

const string = 'AEIOUaeiou1234567890'

function contabiNumVogais(stringDigitada) {
    let vogais = 0
    let numeros = 0

    for (let simbolo of stringDigitada) {
        if (simbolo == 'A' || simbolo == 'a' ||
            simbolo == 'E' || simbolo == 'e' ||
            simbolo == 'I' || simbolo == 'i' ||
            simbolo == 'O' || simbolo == 'o' ||
            simbolo == 'U' || simbolo == 'u') 
        {
            vogais += 1
        }

        else if (simbolo == 0 ||
                 simbolo == 1 ||
                 simbolo == 2 ||
                 simbolo == 3 ||
                 simbolo == 4 ||
                 simbolo == 5 ||
                 simbolo == 6 ||
                 simbolo == 7 ||
                 simbolo == 8 ||
                 simbolo == 9 ) 
        {
            numeros += 1
        }
    }

    return { vogais, numeros }
}

// ---------------------------------------------------

// Ex 02:

function cor(x) {
    const header = document.getElementById('h1')
    
    if(x == 0) 
        header.style.backgroundColor = 'blue'
    else if (x == 1)
        header.style.backgroundColor = 'red'
    else if (x == 2)
        header.style.backgroundColor = 'yellow'
    else 
        header.innerText = 'Erro'
}

// ---------------------------------------------------

// Ex 03:

function exe3() {
    document.open()
    document.write('<ul id="listaEx3">')
    document.write('<li> 1º Indice </li>')
    document.write('<li> 2º Indice </li>')
    document.write('<li> 3º Indice </li>')
    document.write('</ul>')
    document.close()
}

// ---------------------------------------------------

// Ex 04:

function exe4() {
    const p1 = document.getElementById('a1')
    const p2 = document.getElementById('a2')
    
    const lengthP1 = p1.innerText.length
    const lengthP2 = p2.innerText.length

    if (lengthP1 > lengthP2) {
        p1.style.color = 'green'
        p2.style.color = 'red'
    }
    else if (lengthP2 > lengthP1 ) {
        p2.style.color = 'green'
        p1.style.color = 'red'
    }
}

// ---------------------------------------------------

// Ex 5.1:

function exe5part1() {
    let a1 = document.getElementById('a1')
    let a2 = document.getElementById('a2')
    
    a1 = parseInt(a1.innerText)
    a2 = parseInt(a2.innerText)

    if (a1 > 0 && a2 > 0)
        return a1 + a2 
}

// Ex 5.2:

const lista = [1,2,3,4,5,5]

function exe5part2(lista) {
    let count = 0

    for (let num of lista) {
        if (num % 2 == 0)
            count += 1
    }

    return count
}

// Ex 5.3:

const lista2 = [11,22,-20,-40,-100,18]
const lista3 = [11,-22,-20,-40,-100,-18]

function exe5part3(lista) {
    let c = 0
    let cn = 0 

    for (let num of lista) {
        c += 1
        if (num < 0)
            cn += 1
    }

    const regraDe3 = function(c, cn) {
        const resultConta = (cn * 100) / c
        return resultConta
    }

    const porcentg = regraDe3(c,cn)

    return `${porcentg.toFixed(2)}% de números negativos nessa lista.`
}

// Ex 5.4:

const string1 = 'SANTOS'

function exe5part4(string) {
    let reverso = ''

    for (let i = string.length - 1; i >= 0; i--)
        reverso += string[i]

    return reverso
}

// ---------------------------------------------------

// Ex 6:

// Ex 6.1:

function exe6prt1() {
    const paragrafos = document.querySelectorAll('p')
    paragrafos.forEach( p => {
        document.write(p.innerHTML, '<br>')
    })
}

// Ex 6.2:

function exe6prt2() {
    const paragrafos = document.querySelectorAll('p')
    paragrafos.forEach( p => {
        p.style.color = 'blue'
    })
}

// ---------------------------------------------------

// Ex 7.1: É IGUAL AO 6.1 ...

// Ex 7.2:

function exe7pt2() {
    let btnEl = document.createElement('button')
    btnEl.appendChild(document.createTextNode('OK'))
    document.body.appendChild(btnEl)

    let pessoaClicou = false 

    btnEl.addEventListener('click', () => {
        if (pessoaClicou == false) {
            btnEl.innerHTML = 'CLICK'
            pessoaClicou = true
        }
        else if (pessoaClicou == true) {
            btnEl.innerHTML = 'OK'
            pessoaClicou = false
        }
    })
}

// ---------------------------------------------------

// Ex 8:

const vetorStrings = [
    'string 1',
    'string 2',
    'string 3',
]

function exe8(vetor) {
    // Montar a Tabela:
    let table = document.createElement('table')
    let th = document.createElement('th')
    
    th.appendChild(document.createTextNode('Header'))
    table.appendChild(th)

    let tbody = document.createElement('tbody')

    vetor.forEach(index => {
        let nvLinha = document.createElement('tr')
        let nvCelula = document.createElement('td')

        nvCelula.appendChild(document.createTextNode(index))
        nvLinha.appendChild(nvCelula)
        tbody.appendChild(nvLinha)
    })

    table.appendChild(tbody)
    document.body.appendChild(table)

    // Montar CSS da tabela:
    table.style.border = '1px solid black'
    th.style.border = '1px solid black'

    let tds = document.querySelectorAll('td')
    tds.forEach(td => td.style.border = '1px solid black')
}

// ---------------------------------------------------

// Ex 9:

function exe9() {
    let emailCapturado = document.getElementById('email')
    emailCapturado = emailCapturado.innerText
    
    let estaCorreto = false 

    for (let caractere of emailCapturado) {
        if (caractere == '@')
            estaCorreto = true
    }

    if (estaCorreto == true)
        alert(`O email "${emailCapturado}" é válido.`)
    else 
        alert(`O email "${emailCapturado}" é inválido!!!`)
}

// ---------------------------------------------------

// Ex 10:

const nomes = [
    'Ivan',
    'Caio',
    'Jonathan'
]

function exe10(vetor) {
    // Montar tabela:
    let tabela = document.createElement('table')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    let th2 = document.createElement('th')

    th.appendChild(document.createTextNode('ID'))
    th2.appendChild(document.createTextNode('NOMES'))

    tr.appendChild(th)
    tr.appendChild(th2)
    tabela.appendChild(tr)

    vetor.forEach((index, id) => {
        let nvTr = document.createElement('tr')
        let nvTh = document.createElement('th')
        let nvTh2 = document.createElement('th')

        nvTh.appendChild(document.createTextNode(id))
        nvTh2.appendChild(document.createTextNode(index))
        nvTr.appendChild(nvTh)
        nvTr.appendChild(nvTh2)
        tabela.appendChild(nvTr)
    })
    document.body.appendChild(tabela)

    // Definir Estilo CSS.
    const ths = document.querySelectorAll('th')

    tabela.style.border = '1px solid'

    ths.forEach(th => th.style.border = '1px solid')
}

// ---------------------------------------------------

// Ex 11.1:

let texto = 'É um ótimo dia para aprender JS. Aprender é uma força.'

function ex11pt1(string) {
    let cA = 0
    let ca = 0

    for (let letra in string){
        if (string[letra] == 'A')
            cA += 1
        else if (string[letra] == 'a')
            ca += 1
    }

    return { cA, ca }
}

// Ex 11.2:


