// Indicada pela palavra 'class'.
// É a mesma coisa de uma função construtora, apenas um modo diferente de escrever mas ambas fazem a mesma coisa.
// Quando for necessario passar paramentros para a classe, deve ser utilizado o metodo 'constructor()'.
// Os métodos criados vão direto para o prototype da função, o que deixa mais fácil de criar do que uma função construtora.

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
};

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};
// Na classe, essa atribuição manual do prototype não é necessaria.
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
};

const p1 = new Pessoa('Murilo', 'Policastro');
const p2 = new Pessoa2('Nicole', 'Moreira');

console.log(p1);
console.log(p2);