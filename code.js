/*
 Adicionar Um Novo Nome de Pessoa a Uma Lista
 Exibir o Nome da Pessoa Adicionada a Lista
 Sortear Um Nome de Pessoa da Lista de Maneira Aleatória
 Arquivos: code.js, index.html
*/

var ListaNomes = [];
var NomeSorteio = '';

var input = document.getElementById("EntradaNomes");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("BotaoAdicionar").click();
  }
});

document.querySelector('#mensagem').innerHTML = 'adicione nomes a lista de sorteio'

document.querySelector('button').addEventListener('click', AdicionaNomes);

function AdicionaNomes () {
    const EntradaNome = document.getElementById('EntradaNomes').value;
    if (EntradaNome == '') {
        document.querySelector('#mensagem').innerHTML = 'digite algum nome.'
        return false;
    }
    else {
        console.log(EntradaNome);
        ListaNomes.push(EntradaNome);
        console.log(ListaNomes);
        document.querySelector('#mensagem').innerHTML = EntradaNome + ' adicionado.'
        document.querySelector('#listadenomes').innerHTML = ListaNomes
        return false;
    }
}

function Sorteio () {
    if (ListaNomes == '') {
        document.querySelector('#sorteio').innerHTML = 'lista vazia.'
        return false;
    }
    else {
        console.log(NomeSorteio);
        NomeSorteio = ListaNomes.sort(() => Math.random() - 0.5)[0];
        document.querySelector('#sorteio').innerHTML = NomeSorteio
        return false;
    }
}

// Log to console
console.log(ListaNomes);