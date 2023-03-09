const getPorId = (id) =>  document.getElementById(`${id}`)
const criarElmnt = (tipoE) => document.createElement(`${tipoE}`)
const append = (pai, filho) => pai.appendChild(filho)

const showErro = (erro) => {
    const caixaRepos = getPorId('div-repos')
    const nwDiv = criarElmnt('div')
    nwDiv.style.marginTop = '10px'
    nwDiv.style.fontFamily = 'monospace'
    nwDiv.style.fontSize = '16px'
    nwDiv.style.color = 'red'
    nwDiv.innerText = `Erro: ${erro}`
    append(caixaRepos, nwDiv)
}

const decorarCss = (div, title) => {
    div.style.marginTop = '5px'
    div.style.padding = '10px'
    div.style.border = '2px solid #d7d7d7'
    div.style.borderRadius = '3px'
    div.style.borderStyle = 'dashed'
    div.style.fontFamily = 'monospace'
    title.style.marginTop = '0'
}

const mostrarListaNaTela = (listaObjs) => {
    const caixaRepos = getPorId('div-repos')
    for (const obj of listaObjs) {
        const nwDiv = criarElmnt('div')
        const nwTitle = criarElmnt('h3')
        const nwLink = criarElmnt('a')
        decorarCss(nwDiv, nwTitle)
        for (const prop in obj) {
            prop == 'nome' ? nwTitle.innerHTML = obj[prop] : null
            prop == 'url' ? nwLink.innerHTML = obj[prop] : null
            prop == 'url' ? nwLink.href = obj[prop] : null 
            append(nwDiv, nwTitle)
            append(nwDiv, nwLink)
        }
        append(caixaRepos, nwDiv)
    }
}

const pegarDadosRepo = (repo) => {
    let repositorio = {}
    for (const prop in repo) {
        prop == 'name' ? repositorio.nome = repo[prop] : null 
        prop == 'svn_url' ? repositorio.url = repo[prop] : null
    }
    return repositorio
}

const mostrarRepos = (repos) => {
    let listRepos = []
    for (const repo in repos) {
        const infoRepo = pegarDadosRepo(repos[repo])
        listRepos.push(infoRepo)
    }
    mostrarListaNaTela(listRepos)
}

const dadosProgramador = () => {
    const input = getPorId('input-busca')
    const userDigitado = input.value
    const caixaRepos = getPorId('div-repos')
    const info = { nickname: userDigitado, numRepos: 'repos?&per_page=50' }
    
    fetch(`https://api.github.com/users/${info.nickname}/${info.numRepos}`)
    .then(dados => dados.ok ? dados.json() : showErro(dados.status))
    .then(sucesso => mostrarRepos(sucesso))
    .catch(erro => showErro(erro))
    input.value = ''
    caixaRepos.innerHTML = ''

    // axios
    // .get(`https://api.github.com/users/${info.nickname}/${info.numRepos}`)
    // .then(sucesso => mostrarRepos(sucesso.data))
    // .catch(erro => showErro(erro))
    // input.value = ''
    // caixaRepos.innerHTML = ''
}

const buscarRepos = () => {
    const btnBusca = getPorId('btn-busca')
    btnBusca.addEventListener('click', () => dadosProgramador())
}

buscarRepos()