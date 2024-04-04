function criaCalculadora() {

    const display = document.querySelector('.display');

    this.inicia = function() {
        this.pressBtn();
        this.pressEnter();
        this.pressBack();
    };

    this.pressEnter = function() {
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.resolveConta();
            };
        });
    };

    this.pressBack = function() {
        display.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
            };
        });
    };

    this.pressBtn = function() {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.mostrarNoDisplay(el.innerText);
            };
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            };
            if (el.classList.contains('btn-eq')) {
                this.resolveConta();
            };
            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            };
        });
    };

    this.mostrarNoDisplay = function(valor) {
        display.value += valor;
    };

    this.clearDisplay = function() {
        display.value = '';
    };

    this.apagaUm = function() {
        display.value = this.display.value.slice(0, -1);
    };

    this.resolveConta = function() {
        let conta = display.value;
        try {
            conta = eval(conta);

            if (!conta){
                alert('Conta Inválida')
            }

            display.value = String(conta);
        } catch(err) {
            alert('Conta Inválida');
            return;
        }
    };
};

const calculadora = new criaCalculadora();
calculadora.inicia();
