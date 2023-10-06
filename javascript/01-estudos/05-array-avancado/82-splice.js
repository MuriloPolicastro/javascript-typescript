// O splice uni o pop, push em um unico metodo.
const nomes = ['Murilo', 'Nicole', 'Lucas', 'Beatriz'];

// nomes.splice(indice, delete, add1, add2, add3).
// Pop
const removidos = nomes.splice(1, Number.MAX_VALUE); // MAX_VALUE ira remover todos os item adiante daquele.

console.log(nomes);
console.log(removidos);

// Push
const nomes4 = ['Murilo', 'Nicole', 'Lucas', 'Beatriz'];
nomes4.splice(nomes4.length, 0, 'Robson');

console.log(nomes4);

// Adiciona
const nomes2 = ['Murilo', 'Nicole', 'Lucas', 'Beatriz'];
nomes2.splice(2, 0, 'Robson');

console.log(nomes2);

// Remove e adiciona no lugar
const nomes3 = ['Murilo', 'Nicole', 'Lucas', 'Beatriz'];
nomes3.splice(2, 1, 'Robson');

console.log(nomes3);