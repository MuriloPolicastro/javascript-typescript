// Os arrays são indexados, contém indices.
const nomes = ['Murilo', 'Nicole', 'Lucas']; // Literal
console.log(nomes[1]);

// O "delete" exclui apenas o valor, mantendo o indice e mantendo o mesmo vazio.

delete nomes[2];

// Alem do array literal existe o array construtor.
// Raramente será utilizado
const nomes2 = new Array ('Kelly', 'Robson', 'Beatriz');
console.log(nomes2);

// Este construtor serve para todos os tipos, array, função, objetos, numeros, boolean.

// Os array são elementos por referencia, tudo que fizer em um mudará o outro. Pórem é possivel copiar os itens de um para outro com o "spread operator".
const nomes3 = ['Joao', 'Maria', 'Jose'];
const novo = [...nomes3];

novo.pop();
console.log(nomes3);
console.log(novo);

// O slice serve para fatiar o array colocando entre parenteses o indice que deseja começar e o que deseja terminar a fatia, sendo possivel negativos.
const nomes4 = ['Joao', 'Maria', 'Jose', 'Rogerio'];
const fatia = nomes4.splice(2, 4);
console.log(fatia);

// O split serve para transformar uma string em array. Para transformar o array em string se utiliza o "join"
const nome = 'Murilo Policastro Oliveira';
const corte = nome.split(' ');
console.log(corte);