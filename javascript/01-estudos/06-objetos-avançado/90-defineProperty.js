// Diferente do 'Object.freeze' a defineProperty você pode escolher quais chaves quer travar dentro do objeto para que não possam ser alteradas.

/* Propriedades:
    enumerable - > Mostra ou esconde a chave.
    value -> Exibe o valor.
    writable -> Se pode ou não alterar o valor.
    configurable -> Se pode ou não ser confugurada(deletada, alterada, etc).
*/

// 'Object.keys()' mostra as chaves de um objeto.

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: estoque, // pode ser qualquer coisa até uma func
        writable: true, // true permite alterar o valor
        configurable: false // true permite fazer alteracao
    });
};

const p1 = new Produto ('Shorts', 20, 75);
delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));