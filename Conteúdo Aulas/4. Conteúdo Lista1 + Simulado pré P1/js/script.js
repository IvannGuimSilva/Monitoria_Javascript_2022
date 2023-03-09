// Respostas Simulado do dia 25/03/22:

// Ex 1: 
// R: Javasacript é FRACAMENTE TIPADO.

////////////////////////////////////////////////////////////////

// Ex 2: Indique todas as expressões que retornam o número 5:

/*

 1º: (y => 5+y)(0) // --> 5
 2º: (y => 5)(17) // --> 5
 3º: function algo(x){ return x + 1 }; algo(4) // --> 5
 4º: function algo(x){ alert(5) } // ERRADA!!!
 5º: (function(x){ return x - 1 })(6) // --> 5

*/

////////////////////////////////////////////////////////////////

// Ex 3. Escreva uma função anônima que receba 3 números e retorne 
// o maior e o menor deles em um objeto criado por você.

const exe3 = function(a,b,c) {
    const obj = {}

    // Ver o maior número:
    if (a > b && a > c)
        obj.maior = a
    else if (b > a && b > c)
        obj.maior = b
    else if (c > b && c > a) 
        obj.maior = c

    // Ver o menor número:
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
// R: Pegar apenas a primeira div/elemento 
// marcada com a classe "class1".

////////////////////////////////////////////////////////////////

// Ex 5. Implemente uma função que pínte a cor-de-fundo, de amarelo,
// de todos os parágrafos de uma página e todas as divs.

function exe5() {
    const allParagrafos = document.querySelectorAll('p')
    const allDivs = document.querySelectorAll('div')

    allParagrafos.forEach(p => p.style.backgroundColor = 'yellow')
    allDivs.forEach(div => div.style.backgroundColor = 'yellow')
}

exe5()

////////////////////////////////////////////////////////////////

// Ex 6. É possível usar a função map em um objeto? 
// Justifique sua resposta.

function fmap(lista) {
    const novaLista = lista.map(indice => indice + 1)
    return novaLista
}

const pessoa = { nome: 'João', idade: 27, sexo: 'M' }

function fmap2(obj) {
    for (let carac in obj)
        console.log(carac)

    obj.map(carac => console.log(carac))
}