// O que estiver nesse arquivo será exportado apenas o que estiver dentro do objeto 'export', o resto se manterá apenas dentro do arquivo.

const nome = 'Murilo';
const sobrenome = 'Policastro';
const idade = 22;

/* Apenas um item poderá ser exportado como default e existem várias maneiras de exporta-lós.
export default function soma(x, y) {
    return x + y;
}
*/

function soma(x, y) {
    return x + y;
}

// Támbem pode ser usado o export em cada item do código e assim será exportado diretamente.
export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome as sobrenome2, idade, soma as default }

// Para exportar um elemento com outro nome deverá seguir o modelo acima e na importação deverá seguir o nome final.

// Uma função anonima pode ser exportada como padrão.

// Não importa em qual posição do arquivo está o export.