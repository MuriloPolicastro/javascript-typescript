// Quando você seta em uma função o prototype de outra, no objeto criado a partir desta função tera o criador com o nome da função da qual se pegou o prototype, para evitar isso deve-se setar o construtorda função: Object.prototype.constructor = Nome da Função.

// Nome da Função.call() -> serve para herdar os atributos criados em uma outra função.

// Uma função generica que tera os mesmos atributos para tudo que eu quiser adicionar.
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    // O metodo abaixo serve para herdar os atributos já criada em outra função.
    Produto.call(this, nome, preco);
    // Posso adicionar outros atributos alem dos já criadas na função generica.
    this.cor = cor;
}
// Abaixa pegamos o prototype de 'Produto' criamos um objeto vazio dentro de 'Camiseta' e inserimos esse prototype nele.
Camiseta.prototype = Object.create(Produto.prototype);
// Abaixo definimos quem será o construtor do objeto.
Camiseta.prototype.constructor = Camiseta;
// Ira sobreescrever o outro aumento, a ordem é: Objeto, não achou -> prototype do objeto, não achou -> prototype linkado.
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 110);
const camiseta = new Camiseta('Longa', 50, 'Branca');
const caneca = new Caneca('Kids', 20, 'Plastico', 12);
// Abaixo estou utilizando o setter.
caneca.estoque = 220;
camiseta.aumento(50);
console.log(produto);
console.log(camiseta);
console.log(caneca);
// Abaixo estou utilizando o getter.
console.log(caneca.estoque);