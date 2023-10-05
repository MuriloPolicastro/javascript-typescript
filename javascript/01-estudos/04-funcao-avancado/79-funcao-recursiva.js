// Uma função que ela mesmo se chama, parecido com o que o "for" e "while" fazem.

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);