// Filter é usada para filtrar um array e sempre ira retornar um novo array, ela vai iterar sobre cada indice do array.
// A função filter requer que voce retorne um boolean(true ou false) para imbutir ou não no novo array.
// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

const numeros = [5, 80, 60, 70, 8, 9, 2, 1, 98, 13, 22];
function callbackFilter(valor, indice, array) {
    return valor > 10;
    /*if (valor > 10) {
        return true;
    } else {
        return false;
    }*/
}
const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados)

// Retorne as pessoas com nome maior ou igual a 5.
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cujo nome termina com 'a'.
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Joao', idade: 57 },
    { nome: 'Jose', idade: 28 },
    { nome: 'Maria', idade: 55 },
    { nome: 'Murilo', idade: 22 },
    { nome: 'Nicole', idade: 20 },
];

const nomesFiltrados = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(nomesFiltrados);

const idadeFiltrada = pessoas.filter(obj => obj.idade > 50);
//console.log(idadeFiltrada);

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);
// toLowerCase() = para converter o texto todo para minusculo.
// endsWith('a') = significa termina com, escolhe apenas os que terminam com a letra 'a'.

// O Filter não modifica o objeto, apenas filtra conforme a condição.