// Retorne a soma do dobro de todos os pares.
// -> Filtrar Pares.
// -> Dobrar valores.
// -> Reduzir (somar tudo).

const numeros = [5, 80, 60, 70, 8, 9, 2, 1, 98, 13, 22];
const numerosReduzidos = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);
console.log(numerosReduzidos);

// [80,  60,  70,  8,  2, 98,  22] Pares
// [160, 120, 140, 16, 4, 196, 44] Dobro
// 680 Total
