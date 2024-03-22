function rand(min = 0, max = 5) {
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

// async é usado para deixar o código mais limpo, haverá ocasiões em que .then e .catch seram melhores, outras vezes async será melhor.

// A palavra 'await' só podera ser usado com async.

// Dentro da função cada valor devera conter 'await' na frente.

async function executa() {
    try {   
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    // É importante usar o catch para tratar o erro.
    } catch(e) {
        console.log(e);
    }
}
executa();

/*
esperaAi('Fase 1', rand())
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
});
*/

// A promessa ficará pendente pois foi iniciada e o valor foi chamado sem await ou .then
const teste = esperaAi('teste', 2000);
console.log(teste);

/*
ESTADOS DA PROMESSA:
pending -> pendente, ocorre quando você chama o valor da promessa sem estar pronto.
fullfilled -> resolvida.
rejected -> rejeitada.
*/