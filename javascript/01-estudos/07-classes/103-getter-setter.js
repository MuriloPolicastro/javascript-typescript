// Para proteger uma propriedade e impedir que ela seja alterada fora do objeto, pode ser usado uma propriedade privada chamada "Symbol".
// Mesmo com Symbol a velocidade poderá ser setada fora do objeto. Para que possa evitar isso vamos usar o setter e o getter que fará a verificação antes de setar o parametro.

const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] < 0) return;
        this[_velocidade]--;
    }
};



const c1 = new Carro ('Golf');
/*for (let i = 0; i < 150; i++){
    c1.acelerar();
}*/
c1.velocidade = 75;
console.log(c1);