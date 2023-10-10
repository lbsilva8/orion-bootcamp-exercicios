//01. Criar uma função que retorne a quantidade de vogais da palavra passada.

//A) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.


function quantidadeVogalA(palavra: string, vogais: string[], quantidade: number, i:number): number{

    var letras = palavra.toUpperCase().split('');

    for (var i = 0; i < letras.length; i++) {
       // console.log(letras[i])
        if (vogais.includes(letras[i])){
            quantidade = quantidade + 1;
        }
    }
    return quantidade;
}
console.log(quantidadeVogalA('hello',['A', 'E', 'I', 'O', 'U'],0,0));

// Dar um exemplo de uso com uma palavra recebida via input no formulário.

