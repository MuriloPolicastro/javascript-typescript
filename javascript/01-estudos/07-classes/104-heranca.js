// Para uma classe herdar outra utiliza-se a propriedade 'extends'. Uma classe pode se extender a quantas quiser, mas é recomendado apenas a duas classes.
// Dentro do constructor, utiliza a propriedade 'super' que é a classe pai, e dentro dela os paramentros que queremos chamar.
// Dentro dos filhos podemos reescrever ou criar novos métodos.

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado.`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado.`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

// Essa é uma outra herança da mesma classe pai, não há problema em fazer isso.
class Tablet extends DispositivoEletronico {
    constructor(nome, cor, tamanho) {
        super(nome);
        this.cor = cor;
        this.tamanho = tamanho;
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '15 Pro Max');
s1.ligar();
s1.ligar();
console.log(s1);
const t1 = new Tablet('iPad', 'Preto', 17);
console.log(t1);