// 705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o númeor digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
Se o númeor digito for maior que 9, consideramos 0.
*/

//cpfArray = Array.from(cpfLimpo);
//const cpfDobrado = cpfArray.map(valor => valor);

function ValidaCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

// No valida deverá retornar no final verdadeiro ou falso, ela será a função responsavel por toda a checagem e validação do CPF.
ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const cpfNovo = cpfParcial + digito1 + digito2;
    return this.cpfLimpo === cpfNovo;
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce(((ac, valor) => {
        ac += regressivo * Number(valor);
        regressivo--;
        return ac
    }), 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : digito;
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());


//console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));
