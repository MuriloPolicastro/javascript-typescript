// Funções que tenham a sigla "function" escrita armazenam os argumentos enviados mesmo que voce nao tenha definido parametros.
//"arguments" sustenta todos os argumentos enviados.
function funcao() {
    console.log(arguments);
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(8, 1, 2, 3, 12);

// Caso um argumento não seja enviado voce pode fazer com que ele assuma um valor predefinido.
function soma(a, b = 2) {
    console.log(a + b);
}
soma(9);
// Se quiser não mandar um paramentro deve colocar o elemento undefined.

// Tambem é possivel usar os parametros por desestruturação.
function des({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Murilo', sobrenome:'Policastro', idade:21};
des(obj);

// Rest Operator (...) pega todo o resto dos argumentos, todos que não foram atribuidos.
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0 , 80, 20, 60, 35);

// O Rest Operator(...) pode ser usado para substituir o arguments.