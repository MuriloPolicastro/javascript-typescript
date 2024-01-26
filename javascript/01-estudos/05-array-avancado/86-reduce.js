// Reduce consegue fazer o que Filter e Map fazem, porém não é aconselhavel, use as função respectivas para cada coisa.
// Reduce reduz um array em um unico elemento.
// Na função de callback do Reduce teremos um novo parametro, o 'acumulador'.
// Pode ser inserido logo depois da função no metodo Reduce um valor para o acumulador.


// Some todos os numeros (Reduce).
// Retorne um array com os pares (Filter).
// Retorne um array com o dobro dos valores (Map).
const numeros = [5, 80, 60, 70, 8, 9, 2, 1, 98, 13, 22];
const total = numeros.reduce(((acumulador, valor) => acumulador += valor), 0);
// Essa função abaixa deve ser feito usando o Filter.
const arrayPares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
// Essa função abaixa deve ser feito usando o Map.
const arrayDobro = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(arrayDobro);

// Retorne a pessoa mais velha.
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Joao', idade: 71 },
    { nome: 'Jose', idade: 28 },
    { nome: 'Maria', idade: 85 },
    { nome: 'Murilo', idade: 22 },
    { nome: 'Nicole', idade: 20 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
//console.log(maisVelha);