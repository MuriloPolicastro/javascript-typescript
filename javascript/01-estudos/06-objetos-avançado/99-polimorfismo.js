// Uma maneira de metodos se comportarem de maneira diferente como sub classes(classes filhas de uma classe mãe).

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Metodos
Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente | Saldo Atual: R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo da Conta: R$${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta(11, 22, 10);
conta1.depositar(15);
conta1.sacar(5);
conta1.depositar(50);
conta1.sacar(69.01);
conta1.sacar(1);

function ContaCorrente (agencia, conta, valor, limite) {
    Conta.call(this, agencia, conta, valor);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Classe filha - Comportamento diferente -> Polimorfismo
ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite) ) {
        console.log(`Saldo insuficiente | Saldo Atual: R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

console.log();
const cc = new ContaCorrente(22, 33, 50, 100);
cc.depositar(20);
cc.sacar(80);
cc.sacar(110);

function ContaPoupanca(agencia, conta, valor) {
    Conta.call(this, agencia, conta, valor);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

console.log()
const cp = new ContaPoupanca(22, 33, 50);
cp.depositar(20)
cp.sacar(80)