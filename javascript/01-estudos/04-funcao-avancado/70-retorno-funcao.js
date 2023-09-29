// return
// Retorna um valor
// Nem todas as funções precisaram retornar um valor, elas podem fazer coisas uteis sem retorno de valor.

// O return pode ser um objeto.
function criaPesssoa(nome, sobrenome) {
    return {nome, sobrenome};
}
const p1 = criaPesssoa('Murilo', 'Policastro');
console.log(p1);

// return que retorna outra função.
// Essas são chamadas de função closer, que lembra do paramentro mesmo o escopo já tendo sido fechado.
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
console.log(duplica(5));
console.log(triplica(5));