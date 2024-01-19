// Simular que o metodo de um objeto (função) é uma propriedade.
// É otimo para proteger uma propriedade.
// Getter -> Obtem o valor
// Setter -> Seta o valor

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor inválido')
            }
            estoque = valor;
        }
    });
};

const p1 = new Produto ('Shorts', 20, 75);
delete p1.estoque;
p1.estoque = 155;
console.log(p1.estoque);

function criaProduto (nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome)