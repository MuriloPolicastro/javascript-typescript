//continue - pula o número e continua no próximo.
//break - quando encontra o número para o laço.
//Funciona para todos os laços (for, while, do while).

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let valor of numero) {

    if (valor === 2){
       continue; 
    }

    if (valor === 8){
        break; 
     }
    console.log(valor);
}