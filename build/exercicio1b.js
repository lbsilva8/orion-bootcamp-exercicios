"use strict";
//01. Criar uma função que retorne a quantidade de vogais da palavra passada.
//B) Dar um exemplo de uso com uma palavra recebida via input no formulário.
function contaVogal(palavraInserida) {
    let letra = palavraInserida.toUpperCase().split('');
    let contagem = 0;
    const vogal = ['A', 'E', 'I', 'O', 'U'];
    for (let j = 0; j < letra.length; j++) {
        // console.log(letras[i])
        if (vogal.includes(letra[j])) {
            contagem = contagem + 1;
        }
    }
    return contagem;
}
function contarVogaisNaPalavra() {
    const palavraInserida = window.prompt('Digite uma palavra:');
    if (!palavraInserida) {
        alert('Você precisa digitar uma palavra');
        return;
    }
    const quantidadeVogais = contaVogal(palavraInserida);
    alert(`A palavra "${palavraInserida}" tem ${quantidadeVogais} vogais.`);
}
contarVogaisNaPalavra();
