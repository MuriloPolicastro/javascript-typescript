// Se a importação for de algum modulo do proprio Node, não é necessario colocar o caminho do mesmo, basta o nome.
// O caminho do arquivo é usado apenas para modulos criados.
// no Node é usado require para 'importar' ao inves de import.
const mod1 = require('./mod1');
// Esse é um metodo de importação por desestruturação, está tudo na mesma variavel mas poderá ser usado separadamente.
const {sobrenome, falaNome} = require('./mod1')
const Pessoas = require('./mod1').Pessoas;

const p1 = new Pessoas('Nicole', 'Moreira');

console.log(mod1.nome);
console.log(falaNome());
console.log(p1);