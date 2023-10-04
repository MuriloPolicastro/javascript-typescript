// A função fabrica retorna um objeto, na função construtora ela já cria muitas coisas sozinha, já cria e retorna o objeto.
// Na função construtora sempre criamos com a primeira letra maiuscula -> Pessoa (new). Não é regra mas é uma convenção
// Sempre precisará da palavra "new" antes de chamar a função.
// new cria um novo objeto vazio aponta o que esta pedindo para esse objeto e já retorna.
// Na construtora não é preciso usar virgulas, usa a sintaxe normal do JS.

function Pessoa(nome, sobrenome) {
    //Privadas
    const ID = 789; // Escopo dentro da função, não pode ser acessado fora da função.

    //Publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome +': sou um método');
    };
}

const p1 = new Pessoa('Murilo', 'Policastro');
const p2 = new Pessoa('Nicole', 'Moreira');

p2.metodo();
console.log(p1.nome);