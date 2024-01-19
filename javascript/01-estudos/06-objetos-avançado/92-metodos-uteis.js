// Object.assign() -> é usado para copiar as propriedades de um outro objeto e criar um novo, para desta forma não apontar para o mesmo local na memoria, assim como o spread operator.

// Object.getOwnPropertyDescriptor() -> Exibe as propriedades de uma chave do objeto selecionado.

// Object.values() -> Exibe os valores que estão dentro das chaves do objeto, o Object.keys exibe as chaves, este apenas os valores sem as chaves.

// Object.entries() -> Cria um array para cada chave do objeto, contendo dentro do array o nome da chave e o valor.

const produto = {nome: 'camiseta', preco: 60};
const caneca = Object.assign({}/* Cria um objeto vazio */, produto /*pega um objeto e aponta para o objeto vazio criado*/, {material: 'porcelana'});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));

// Destruction usando Object.entries() e for:
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}