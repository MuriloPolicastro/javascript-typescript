// For é um laço de repetição que se repete ate que o valor da condição seja false.

//  variavel ; condição ; incrementar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par)
}