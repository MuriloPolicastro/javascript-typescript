// Está disponivel apenas dentro de arrays.
// É usado normalmente apenas para iterar sobre o array.

const a1 = [1, 2, 3, 4, 5];
/*
a1.forEach(function(valor, indice, array){
    console.log(valor);
});
*/

// A função a baixa seria mais simples usar o Reduce, porem é uma maneira de usar o forEach.
let total = 0;
a1.forEach(valor => total += valor);
console.log(total);