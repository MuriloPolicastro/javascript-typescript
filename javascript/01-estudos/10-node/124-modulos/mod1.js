const nome = 'Murilo';
const sobrenome = 'Policastro';

const falaNome = () => nome + ' ' + sobrenome;

class Pessoas {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// module e exports são metódos padrões do Node. Exports é apenas um objeto dentro de module.
module.exports.nome = nome;
// Maneira simplificada de exportar.
exports.sobrenome = sobrenome;
// É possivel tambem atribuir algum elemento ao exports por meio do this.
this.falaNome = falaNome;
exports.Pessoas = Pessoas;
// É possivel sobreescrever o exports de module, como feito abaixo.
module.exports = { nome, sobrenome };

// Se não exportar outro arquivo não terá acesso aos elementos do modulo.