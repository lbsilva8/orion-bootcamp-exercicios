"use strict";
/*
Dado o array:

let lista = new Array<Object> = [ <br>
{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},<br>
{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},<br>
{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},<br>
{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];<br>
];
*/
// Demonstre todas as funções com o paradigma funcional e com o imperativo
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//A) Crie uma função que retorne a bio do id passado
//Paradigma imperativo
function bioByIdImp(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].bio;
        }
    }
    return "Id não encontrado";
}
console.log(`***[Paradigma imperativo] A Bio do ID escolhido é: ${bioByIdImp(3)}`);
//Paradigma funcional
function bioByIdFun(id) {
    let elementoBio = lista.find(item => item.id === id);
    if (elementoBio) {
        return elementoBio.bio;
    }
    else {
        return "Id não encontrado";
    }
}
console.log(`***[Paradigma funcional] A Bio do ID escolhido é: ${bioByIdFun(3)}`);
//B) Crie uma função que retorne o name do id passado
//Paradigma imperativo
function nameByIdImp(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].name;
        }
    }
    return "Id não encontrado";
}
console.log(`***[Paradigma imperativo] O Name do ID escolhido é: ${nameByIdImp(3)}`);
//Paradigma funcional
function nameByIdFun(id) {
    let elementoName = lista.find(item => item.id === id);
    if (elementoName) {
        return elementoName.name;
    }
    else {
        return "Id não encontrado";
    }
}
console.log(`***[Paradigma funcional] O Name do ID escolhido é: ${nameByIdFun(3)}`);
//C) Crie uma função que apague um item da lista a partir de um id passado
//Paradigma imperativo
function removeByIdImp(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista.splice(i, 1);
            return `Item de id ${id} foi removido`;
        }
    }
    return "Id não encontrado";
}
console.log(`***[Paradigma imperativo] ${removeByIdImp(3)}, a nova lista é: `);
console.log(lista);
//Paradigma Funcional
function removeByIdFun(id) {
    lista = lista.filter(item => item.id !== id);
    console.log(`***[Paradigma funcional] Item de id ${id} foi removido, a nova lista é:"`);
}
removeByIdFun(2);
console.log(lista);
//D) Crie uma função que altere a bio ou o name a partir de um id passado
//Paradigma imperativo
function atualizaNomebyIDImp(id, novoName) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            if (novoName) {
                lista[i].name = novoName;
            }
            return `Item de id ${id} foi atualizado`;
        }
    }
    return "Id não encontrado";
}
console.log(`***[Paradigma imperativo] ${atualizaNomebyIDImp(1, "novo nome1")}, a nova lista é: `);
console.log(lista);
//Paradigma funcional
function atualizaNomebyIDFun(id, novoName) {
    lista = lista.map(item => {
        if (item.id === id) {
            if (novoName) {
                item.name = novoName;
            }
        }
        return item;
    });
}
console.log(`***[Paradigma imperativo] ${atualizaNomebyIDFun(1, "novo nome1")}, a nova lista é: `);
console.log(lista);
