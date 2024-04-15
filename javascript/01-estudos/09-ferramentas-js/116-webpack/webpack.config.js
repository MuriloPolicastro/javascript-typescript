// o Node.js usa o sistema de modulos CommonJS(padrao Node), diferente do JS ES6(padrao Javascript).
// Todo arquivo é um modulo diferente para o Node.

const path = require('path');

// o objeto abaixo tem o mesmo objetivo do 'return' em funções normais, a resposta será apenas o que está dentro dela.
// Esse objeto contem a config do webpack.

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
       path: path.resolve(__dirname, 'public', 'assets', 'js'),
       filename: 'bundle.js'
    },
    module: {
        rules: [{
            // Para o webpack não ficar analisando essa pasta.
            exclude: /node_modules/,
            // Qual vai ser a extensão dos arquivos que vão ser testados.
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};
// O resolve procura o diretorio sozinho com base no nome das pastas inseridos.
// __dirname é o diretorio atual.
// O (devtool: 'souce-map') é usado para mapear o arquivo e saber de onde vem cada coisa.