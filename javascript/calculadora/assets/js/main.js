function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            this.pressBtn();
            this.pressEnter();
            this.pressBack();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.resolveConta();
                };
            });
        },

        pressBack() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                };
            });
        },

        pressBtn() {
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
        },

        mostrarNoDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        resolveConta() {

        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
