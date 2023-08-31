//While é normalmente usado para repetições que nao se sabe a quantidade que vai repetir.

function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

//while - checa a condição e depois executa.
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

//do while - primeiro executa e depois checa a condição (sempre vai executar 1 vez pelo menos).
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);