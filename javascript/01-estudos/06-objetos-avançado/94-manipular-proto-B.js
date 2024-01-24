// Pode ser usado em um objeto literal o proto de uma função construtora.

//Object.setPrototypeOf(obj que vai roubar o proto, aqui deve ser inserido a função e não a variavel, salvo se for um obj literal);

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('shorts', 60);

// Literal
const p2 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p1.desconto(50);
p2.aumento(20)
console.log(p1);
console.log(p2);

// Pode se criar um objeto e já setar o prototype dele
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 60
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});
p3.aumento(20);
console.log(p3);