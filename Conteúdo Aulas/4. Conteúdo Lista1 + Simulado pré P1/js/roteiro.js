// ------------------------------------------------ 
//     ROTEIRO + IDEIAS PARA AULA 25/03/2022: 
// ------------------------------------------------
// Lista 1 Garcia + Simulado
// ---- //////// ---

// Respostas Simulado 25/03/22:

// Ex 1. R: Javascript é fracamente tipado.

////////////////////////////////////////////////////////////////

// Ex 2. Indique todas as expressões que retornam o número 5:

/*

 1º: (y => 5+y)(0) // --> 5
 2º: (y => 5)(17) // --> 5
 3º: function algo(x){ return x + 1 }; algo(4) // --> 5
 4º: function algo(x){ alert(5) } // ERRADA.
 5º: (function(x){ return x - 1 })(6) // --> 5

*/

////////////////////////////////////////////////////////////////

// Ex 3. Escreva uma função anônima que receba 3 números e retorne 
// o maior e o menor deles em um objeto criado por você.

const exe3 = function(a,b,c) {
    const obj = {}
    
    // Ver maior:
    if (a > b && a > c)
        obj.maior = a 
    else if (b > a && b > c)
        obj.maior = b
    else if (c > b && c > a)
        obj.maior = c 
    
    // Ver menor:
    if (a < b && a < c)
        obj.menor = a
    else if (b < a && b < c)
        obj.menor = b
    else if (c < a && c < b)
        obj.menor = c

    return obj
}

////////////////////////////////////////////////////////////////

// Ex 4. A expressão document.querySelector(".class1")
// teria o efeito de:

/* Supondo que eu tivesse uma lista de divs: 

    <div class="class1">aluno 1</div>
    <div class="class1">aluno 2</div>
    <div class="class1">aluno 3</div>

*/

// R: Pegar apenas a primeira div/elemento 
// marcada com a classe "class1".

////////////////////////////////////////////////////////////////

// Ex 5. Implemente uma função que pínte a cor-de-fundo, de amarelo,
// de todos os parágrafos de uma página e todas as divs.

function exe5() {
    const allParagrafos = document.querySelectorAll('p')
    const allDivs = document.querySelectorAll('div')
    
    allParagrafos.forEach(paragrafo => {
        paragrafo.style.backgroundColor = 'yellow' })
    
    allDivs.forEach(div => {
        div.style.backgroundColor = 'yellow' })
}

exe5() // Implementada :D

////////////////////////////////////////////////////////////////

// Ex 6. É possível usar a função map em um objeto? 
// Justifique sua resposta.

function fmap1(lista) {
    lista.map(x => console.log(x + 1)) 
}

const obj = { nome: 'Ivan', idade: 22, sexo: 'M' }


function fmap2(objeto) {
    for (let carac in objeto)
        console.log(carac)

    objeto.map(caracte => console.log(caracte))
}

// R: Não, pois o map é feito para fazer leitura de arrays.
// Objetos não conseguem ser lidos pelo Map pois devemos,
// fazer associação entre chave e valor, e isso não existe
// em um array. Logo vai além da capacidade de leitura do
// Map.