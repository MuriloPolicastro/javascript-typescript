/*
const data = new Date();
const diaSemana = day(data.getDay());
const mes = month(data.getMonth());
const dia = zeroEsquerda(data.getDate());
const ano = zeroEsquerda(data.getFullYear());
const horas = zeroEsquerda(data.getHours());
const minuto = zeroEsquerda(data.getMinutes());
const resultado = document.querySelector('.container h1');

function day(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado'
        return diaSemanaTexto;
    }
}

function month(mes) {
    let mesTexto;
    switch (mes) {
        case 0:
            mesTexto = 'janeiro';
        return mesTexto;
        case 1:
            mesTexto = 'fevereiro';
        return mesTexto;
        case 2:
            mesTexto = 'março';
        return mesTexto;
        case 3:
            mesTexto = 'abril';
        return mesTexto;
        case 4:
            mesTexto = 'maio';
        return mesTexto;
        case 5:
            mesTexto = 'junho';
        return mesTexto;
        case 6:
            mesTexto = 'julho'
        return mesTexto;
        case 7:
            mesTexto = 'agosto'
        return mesTexto;
        case 8:
            mesTexto = 'setembro'
        return mesTexto;
        case 9:
            mesTexto = 'outubro'
        return mesTexto;
        case 10:
            mesTexto = 'novembro'
        return mesTexto;
        case 11:
            mesTexto = 'dezembro'
        return mesTexto;
    }
}

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

resultado.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} ${horas}:${minuto}`
*/




//SEGUNDO MELHOR RESULTADO
/*
const data = new Date();
const diaSemana = day(data.getDay());
const mes = month(data.getMonth());
const dia = zeroEsquerda(data.getDate());
const ano = zeroEsquerda(data.getFullYear());
const horas = zeroEsquerda(data.getHours());
const minuto = zeroEsquerda(data.getMinutes());
const resultado = document.querySelector('.container h1');

function day(diaSemana) {
    const diaSemanas = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
    return diaSemanas[diaSemana];
}

function month(numMes) {
    const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return mes[numMes];
}

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

resultado.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} ${horas}:${minuto}`*/


//MELHOR RESULTADO
let h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR' , { dateStyle: 'full',
timeStyle: 'short'});