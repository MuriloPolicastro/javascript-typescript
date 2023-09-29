// A função procura dentro do seu escopo se encontrar para ali, se não encontrar procura no seu pai, no pai do seu pai, assim por diante até que encontre.
const nome = 'Murilo';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Policastro';
    falaNome();
}
usaFalaNome();
// Não importa onde seja declarado, a função sempre vai lembrar onde esstá e quais são seus vizinhos, isso caracteriza o escopo léxico.