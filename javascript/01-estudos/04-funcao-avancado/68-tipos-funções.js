// As funções e var sempre vao para o topo da engine do JS por meio do hoisting.
// Não importa se a chamada é antes ou depois da função.

falaoi();
function falaoi() {
    console.log('Oi');
}

// Funções são objetos de primeira classe (first-class).
// As funções podem ser tratadas como dados.
// Function expression.
const souUmDado = function() {
    console.log('Sou um dado');
};

// Isso é muito poderoso pois essa função pode ser usada como "dado" em outra função.

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
};

executaFuncao(souUmDado);

// Arrow function (function exoression mais curta).
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Função dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...')
    }
};
obj.falar();