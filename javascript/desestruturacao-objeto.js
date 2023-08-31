//... rest - mostra o resto que não foi selecionado.
const pessoa = {
    nome: 'Murilo',
    sobrenome: 'Policastro',
    idade: 21,
    endereco: {
        rua: 'Benedita de Paula',
        numero: 120
    }
};
//Quando o nome da variavel criada é o mesmo da chave basta deixar um valor. Também é possivel inserir um valor padrao dentro do objeto.
//const { nome='Não definido', sobrenome } = pessoa;

//Para redefinir o nome da variavel basta colocar o nome da chave antes dos : e depois o nome escolhido.
//const {nome: n, sobrenome} = pessoa;

//Para acessar um objeto dentro de outro objeto, para alterar o nome da variavel é da mesma maneira.
const { endereco: {rua: r, numero}, ...resto } = pessoa;
console.log(r, numero, resto)