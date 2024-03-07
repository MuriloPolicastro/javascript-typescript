const pessoas = [
    { id: 3, nome: 'Murilo' },
    { id: 2, nome: 'Jose' },
    { id: 1, nome: 'Maria' },
];

// O problema de ser feito essa desestruturação é que saira com a ordem invertida, já que o proprio JS coloca em ordem crescente.
/*const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}*/

//Dessa maneira o JS manterá a ordem definida na variável.
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}
novasPessoas.delete(1)
console.log(novasPessoas);
