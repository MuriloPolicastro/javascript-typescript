function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min, max) - min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            };

            resolve(msg);
        }, tempo);
    });
}

// Promise.all - resolve todas as promessas juntas.

// Quando o reject contem o return no fim da função não será executado mais nenhum codigo, caso nao tenha o return o codigo continua a executar mesmo com erro.
/*
const promises = [
    'primeiro valor',
    esperaAi('Promise 1', 2000),
    esperaAi('Promise 2', 5000),
    esperaAi('Promise 3', 1000),
    'ultimo valor',
    //esperaAi(17, 1000)
];

Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log('Erro:', e);
    });
*/

// Promise.race é uma corrida, será entregue apenas o valor que carregar mais rápido, se houver outros valores que não são promessas juntos, eles seram entregues.
/*
const promises = [
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    esperaAi(17, 1000)
];

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log('Erro:', e);
    });
*/

// Promise.resolve é usado quando você já tem a promesa resolvida.
// Promise.reject é usado quando você quer sempre rejeitar a promessa.
function baixaPagina(){
    const emCache = true;

    if(emCache) {
        //return Promise.resolve('Página em cache.');
        return Promise.reject('Sem cache')
    } else {
        return esperaAi('Baixei a página', 4000);
    }
}

baixaPagina()
    .then(dadospagina => console.log(dadospagina))
    .catch(e => console.log(e));