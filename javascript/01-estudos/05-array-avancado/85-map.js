// a Map irá receber um novo array do mesmo tamanho do original, porém com valores alterados sem modificar o original, apenas usando como base.
// Funciona da mesma maneiro do Filter, recebe uma função de callback, cria um novo array.

const numeros = [5, 80, 60, 70, 8, 9, 2, 1, 98, 13, 22];
const numerosDobrados = numeros.map(valor => valor * 2);
//console.log(numerosDobrados);

/*Para cada elemento:
    Retorne apenas uma string com o nome da pessoa.
    Remova apenas a chave 'nome' do objeto.
    Adicione uma chave id em cada objeto.
*/
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Joao', idade: 57 },
    { nome: 'Jose', idade: 28 },
    { nome: 'Maria', idade: 55 },
    { nome: 'Murilo', idade: 22 },
    { nome: 'Nicole', idade: 20 },
];