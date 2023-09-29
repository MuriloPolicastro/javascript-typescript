// Closure é o escopo direto que a função tem acesso, o escopo lexico da função.
// É a habilidade que a função tem de acessar seu escopo lexico.
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Murilo'); // Closure desta função será Murilo.
const funcao2 = retornaFuncao('Joao'); // Closure desta função será Joao.
console.dir(funcao);
console.dir(funcao2);
// O clossure pode ser diferente para cada função.