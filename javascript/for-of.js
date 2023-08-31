//Retorna direto o valor e não o indice de cada elemento da array.

//For clássico - geralmente para iteráveis (string ou array).
//For in - retorna o indice ou chave (string, array ou object).
//For of - retorna o valor em si (iteráveis, string ou array).

const frutas = ['Pera', 'Uva', 'Maça'];

for (let valor of frutas) {
    console.log(valor)
}