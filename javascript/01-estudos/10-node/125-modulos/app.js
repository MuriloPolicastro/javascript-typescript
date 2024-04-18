// Aqui já é possivel executar direto a função.
const Cachorro = require('./mod');
const c1 = new Cachorro('Bob')

c1.latir();

// Exitem 2 variáveis no Node para caminho dos arquivos: __filename; __dirname.
console.log(__dirname);
console.log(__filename);