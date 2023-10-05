// Ela nunca entregará todos os resultados de uma vez.
// Seria quase como pausar o código.
// Usa "yield" no lugar de "return".
// O "return" vai entregar o valor e finalizar a função;

console.log('Geradora 1:');

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();

/*
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next().value);
*/

// O "for" sabe exatamente onde acaba os valores.
for(let valor of g1) {
    console.log(valor);
}

console.log('Geradora 2:');

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('Geradora 3 e 4:');

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

// A função 4 usa dados da 3 e da continuidade;
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor)
}

console.log('Geradora 5:');

function* geradora5() {
    yield function() {
        console.log('Vim do yield 1');
    };

    yield function() {
        console.log('Vim do yield 2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

console.log('Geradora 6:');

// O "return" vai entregar o valor e finalizar a função;
function* geradora6() {
    yield function() {
        console.log('Vim do yield 1');
    };

    return function() {
        console.log('Vim do return');
    };

    yield function() {
        console.log('Vim do yield 2');
    };
}

const g6 = geradora6();
const func3 = g6.next().value;
const func4 = g6.next().value;

func3();
func4();