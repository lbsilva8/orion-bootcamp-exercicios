//exercicio 1

function verificaPalavra(): void {
  const valorEntrada:string = (document.getElementById('contVogal') as HTMLInputElement).value.toLowerCase();
  const contaVogais:number = contaVogaisNaPalavra(valorEntrada);
  const valoresSaida = <HTMLDivElement>document.getElementById('res');
  valoresSaida.innerHTML = `A palavra tem ${contaVogais} vogais.`;
}

function contaVogaisNaPalavra(word: string): number {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vogais.includes(word[i])) {
      count++;
    }
  }

  return count;
}


//exercicio 2
interface Biografia {
    id: number;
    name: string;
    bio: string;
  }
  
  const lista: Biografia[] = [
    {"id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
  ]
  
  // Crie uma função que retorne a bio do id passado
  function bioById(): void {
    const valorEntrada = Number((<HTMLInputElement>document.getElementById('numeroId')).value);
    const valorSaida = <HTMLDivElement>document.getElementById('resposta')
    valorSaida.innerHTML = ''
  
    const elementoBio = lista.find(item => item.id === valorEntrada)
  
    if (elementoBio) {
      valorSaida.innerHTML = `<strong> Bio do ID escolhido é:</strong> ${elementoBio.bio}`;
    } else {
      valorSaida.innerHTML = 'ID não encontrado.'
    }
  }
  
  // Crie uma função que retorne o name do id passado
  function nameById(): void {
    const valorEntrada = Number((<HTMLInputElement>document.getElementById('numeroId')).value)
    const valorSaida = <HTMLDivElement>document.getElementById('resposta')
    valorSaida.innerHTML = ''
  
    const elementoBio = lista.find(item => item.id === valorEntrada)
  
    if (elementoBio) {
      valorSaida.innerHTML = `<strong>A Bio do ID escolhido é:</strong> ${elementoBio.name}`
    } else {
      valorSaida.innerHTML = 'ID não encontrado.'
    }
  }
  
  // Crie uma função que apague um item da lista a partir de um id passado
  
  function deleteById(): void {
    const valorEntrada = Number((<HTMLInputElement>document.getElementById('numeroId')).value)
    const valorSaida = <HTMLDivElement>document.getElementById('resposta')
    valorSaida.innerHTML = ''
  
    const novaLista = lista.findIndex(item => item.id === valorEntrada)
  
    if (novaLista !== -1) {
      lista.splice(novaLista, 1)
      valorSaida.innerText = `Item com ID ${valorEntrada} foi removido, a nova Lista é: ${JSON.stringify(lista, null, 2)}`
    } else {
      valorSaida.innerText = "Id não encontrado"
    }
  }
  
  // Crie uma função que altere a bio ou o name a partir de um id passado
  
  function alteraById(): void {
    const alteraLista = parseInt((<HTMLInputElement>document.getElementById('alteraLista')).value)
    const novoNome = ((<HTMLInputElement>document.getElementById('novoNome')).value)
    const novabio = ((<HTMLInputElement>document.getElementById('novaBio')).value)
    const valorSaida = <HTMLDivElement>document.getElementById('resp')
    valorSaida.innerHTML = ''
  
    const index = lista.findIndex(item => item.id === alteraLista)
  
    if (index !== -1) {
      if (novoNome) {
        lista[index].name = novoNome
      }
      if (novabio) {
        lista[index].bio = novabio
      }
      valorSaida.innerText = `<strong> Item com ID ${alteraLista} foi alterado, a nova Lista é:<strong> ${JSON.stringify(lista, null, 2)}`
    }else {
      valorSaida.innerText = "Id não encontrado"
    }
  }