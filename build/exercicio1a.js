"use strict";
//01. Criar uma função que retorne a quantidade de vogais da palavra passada.
//A) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
function quantidadeVogal(palavra, vogais, quantidade, i) {
    let letras = palavra.toUpperCase().split('');
    for (let i = 0; i < letras.length; i++) {
        // console.log(letras[i])
        if (vogais.includes(letras[i])) {
            quantidade = quantidade + 1;
        }
    }
    console.log(`***A quantidade de vogais da palavra "${palavra}" é: `);
    return quantidade;
}
console.log(quantidadeVogal('hello', ['A', 'E', 'I', 'O', 'U'], 0, 0));
