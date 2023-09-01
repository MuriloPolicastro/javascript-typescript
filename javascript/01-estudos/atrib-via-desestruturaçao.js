//Desestruturação de Array.
// ,, - pula um elemento da array.
/*
const numero = [100, 200, 300, 400, 500];
const [um,, dois, tres, quatro] = numero;

console.log(um, tres)
*/

//Acessar arrays dentro de array com desestruturação.
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[0])