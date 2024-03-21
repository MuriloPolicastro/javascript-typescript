// Quando você pede um dado mas não exatamente quando vai recebe-lo antes era usado uma função de callback, as Promises veio para acabar com os problemas das funções de callback que acabam virando uma função dentro da outra.

// As Promises são paralelas, o JS continua executando o codigo e quando as Promises estão prontas ele executa.

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min, max) - min);
}

/* Esta é a maneira com a função de callback.

function esperaAi(msg, tempo,cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

Começam a ter muitas funções uma dentro da outra.

esperaAi('Frase 1', rand(1,5), function() {
    esperaAi('Frase 2', rand(1,5), function() {
        esperaAi('Frase 3', rand(1,5));
    });
});
*/

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// .then é usado para resolve .catch é usado para o reject.
esperaAi('Frase 1', rand(1,5)).then( resposta => {
    console.log(resposta)
    return esperaAi('Frase 2', rand(1,5))
}).then( resposta => {
    console.log(resposta)
    return esperaAi('Frase 3', rand(1,5))
}).then(resposta => console.log(resposta));

console.log('Isso será exibido antes de qualquer Promise.');