// For in - Lê os indices ou chaves dos elementos.
/*
const frutas = ['Pera', 'Uva', 'Maça'];

for (let i in frutas) {
    console.log(frutas[i])
}
*/

const pessoa = {
    nome: 'Murilo',
    idade: 21,
    sexo: 'Masculino'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}