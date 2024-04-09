// o Node.js usa o sistema de modulos CommonJS(padrao Node), diferente do JS ES6(padrao Javascript).
// Todo arquivo é um modulo diferente para o Node.

const path = require('path');

// o objeto abaixo tem o mesmo objetivo do 'return' em funções normais, a resposta será apenas o que está dentro dela.
// Esse objeto contem a config do webpack.

module.exports = {
    mode: 'development',
    entry: './src/index.js',
};