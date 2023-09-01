//const data = new Date(1693352801018); //milesimos contados a partir do dia 01/01/1970
//const data = new Date(2021, 03, 01, 20, 05, 30, 685); ano, mes, dia, hora, minuto, segundo, ms
// const data = new Date('2021-03-01 20:05:30.685'); // Date String
/*console.log(data);

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa em 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milesimo', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0-Domingo 6-Sábado

console.log(Date.now()) // milesimos da data atual contados de 01/01/1970
*/
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)
