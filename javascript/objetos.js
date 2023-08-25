/*const pessoa = {
    nome: 'Murilo',
    idade: 21,
    altura: 1.9
};

console.log(pessoa.altura)*/
/*
function criarPessoa (nome,idade,altura) {
    return {nome,idade,altura} /*objeto dentro da função
}

const pessoa1 = criarPessoa('Murilo',21,1.9);

console.log(pessoa1.altura);*/

const pessoa1 = {
    nome: 'Murilo',
    sobrenome: 'Policastro',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`); /*function dentro de um objeto é chamado de method */
    },

    incrementarIdade(){
        this.idade++;       /* this faz referencia aos valores do proprio objeto */
    }
}

console.log(pessoa1.fala());
console.log(pessoa1.incrementarIdade());
console.log(pessoa1.fala());
console.log(pessoa1.incrementarIdade());
console.log(pessoa1.fala());
console.log(pessoa1.incrementarIdade());
console.log(pessoa1.fala());