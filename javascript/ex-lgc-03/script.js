/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função com números de 0 a 100
*/

function fizzBuzz (x) {
    if (typeof x === "number") {
        if (x > 0 && x < 100) {
            if (x % 3 && x % 5) {
                console.log ('FizzBuzz');
            } else if (x % 3) {
                console.log ('Fizz');
            } else if (x % 5) {
                console.log ('Buzz');
            } else {
                console.log(x);
            }
        } else {
            console.log('Insira um número de 0 a 100.');
        }
    } else {
        console.log('Insira um número válido.');
    }
}

fizzBuzz(15);