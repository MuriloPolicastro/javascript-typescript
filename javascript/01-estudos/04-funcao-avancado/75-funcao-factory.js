// A função criada dentro de um objeto é chamado de metodo.
// O this faz referencia a quem está chamando a função.

// Função Fabrica (Factory Function)
// São usadas para criar varios itens que contenham os mesmos elementos, de forma que use uma função para construir todos.
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter, um metodo que finge ser um atributo, usado quando precisa obter o valor e não setar.
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter, usado para setar um novo valor, tambem finge ser um atributo.
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está falando ${assunto}.`;
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Murilo', 'Policastro', 1.90, 70);
p1.nomeCompleto = 'Nicole Moreira';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);