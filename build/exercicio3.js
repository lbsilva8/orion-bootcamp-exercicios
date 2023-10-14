"use strict";
const lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// Crie uma função que retorne a bio do id passado
function bioById() {
    const valorEntrada = Number(document.getElementById('numeroId').value);
    const valorSaida = document.getElementById('resposta');
    valorSaida.innerHTML = '';
    const elementoBio = lista.find(item => item.id === valorEntrada);
    if (elementoBio) {
        valorSaida.innerHTML = `<strong> Bio do ID escolhido é:</strong> ${elementoBio.bio}`;
    }
    else {
        valorSaida.innerHTML = 'ID não encontrado.';
    }
}
// Crie uma função que retorne o name do id passado
function nameById() {
    const valorEntrada = Number(document.getElementById('numeroId').value);
    const valorSaida = document.getElementById('resposta');
    valorSaida.innerHTML = '';
    const elementoBio = lista.find(item => item.id === valorEntrada);
    if (elementoBio) {
        valorSaida.innerHTML = `<strong>A Bio do ID escolhido é:</strong> ${elementoBio.name}`;
    }
    else {
        valorSaida.innerHTML = 'ID não encontrado.';
    }
}
// Crie uma função que apague um item da lista a partir de um id passado
function deleteById() {
    const valorEntrada = Number(document.getElementById('numeroId').value);
    const valorSaida = document.getElementById('resposta');
    valorSaida.innerHTML = '';
    const novaLista = lista.findIndex(item => item.id === valorEntrada);
    if (novaLista !== -1) {
        lista.splice(novaLista, 1);
        valorSaida.innerText = `Item com ID ${valorEntrada} foi removido, a nova Lista é: ${JSON.stringify(lista, null, 2)}`;
    }
    else {
        valorSaida.innerText = "Id não encontrado";
    }
}
// Crie uma função que altere a bio ou o name a partir de um id passado
function alteraById() {
    const alteraLista = parseInt(document.getElementById('alteraLista').value);
    const novoNome = (document.getElementById('novoNome').value);
    const novabio = (document.getElementById('novaBio').value);
    const valorSaida = document.getElementById('resp');
    valorSaida.innerHTML = '';
    const index = lista.findIndex(item => item.id === alteraLista);
    if (index !== -1) {
        if (novoNome) {
            lista[index].name = novoNome;
        }
        if (novabio) {
            lista[index].bio = novabio;
        }
        valorSaida.innerText = `<strong> Item com ID ${alteraLista} foi alterado, a nova Lista é:<strong> ${JSON.stringify(lista, null, 2)}`;
    }
    else {
        valorSaida.innerText = "Id não encontrado";
    }
}
