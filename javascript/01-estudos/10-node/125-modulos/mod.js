// É possivel resetar o exports para que ele exporte direto qualquer objeto(pode ser função, variaveis, classes, etc), muito similar ao export default do JS.
/*
module.exports = function(x, y) {
    return x * y;
}
*/
module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir(){
        return console.log(`${this.nome} está latindo`);
    }
}