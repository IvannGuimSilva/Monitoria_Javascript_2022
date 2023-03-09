const pegaPorID = (id) => document.getElementById(id)
const criarElmnt = (tipoE) => document.createElement(tipoE)
const anexarDentro = (pai, filho) => pai.appendChild(filho)
const defAtributo = (Elmnt, nmAt, vlAt) => Elmnt.setAttribute(nmAt,vlAt)

const botarFotoNaTela = (foto) => {
    const divPokemons = pegaPorID('divPokemons')
    divPokemons.innerHTML = ''

    const imagem = criarElmnt('img')
    defAtributo(imagem, 'src', foto)
    
    anexarDentro(divPokemons, imagem)
}

const mostrarPokemon = (pacote_pkm) => {
    for (const prop in pacote_pkm) {
        if (prop == 'sprites') {

            for (const sprite in pacote_pkm[prop]) {
                if (sprite == 'other') {

                    for (const tipoArte in pacote_pkm[prop][sprite]) {
                        if (tipoArte == 'official-artwork') {
                            
                            const FOTO_POKEMON = pacote_pkm[prop]
                                                         [sprite]
                                                       [tipoArte]
                                                   .front_default

                            botarFotoNaTela(FOTO_POKEMON)
                        }
                    }
                }
            }
        }
    }
}

const buscarPokemon = () => {
    const input = pegaPorID('inputBusca')
    const pkmDigitado = input.value.toLowerCase()
    const divPokemons = pegaPorID('divPokemons')
     
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmDigitado}`)
        .then(dados => dados.ok ? 
            dados.json() : console.log(dados.status)) // STATUS REQUISIÇÃO
        .then(sucesso => mostrarPokemon(sucesso))
        .then(erro => console.warn(erro))             // ERRO NA BUSCA
}

const iniciarBusca = () => {
    const btn = pegaPorID('btnBusca')
    btn.addEventListener('click', () => buscarPokemon())
}

iniciarBusca()