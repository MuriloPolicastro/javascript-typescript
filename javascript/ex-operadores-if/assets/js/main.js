const pesoForm = document.querySelector('#peso');
const alturaForm = document.querySelector('#altura')
const resultado = document.querySelector('.resultado');

function enviar(){
    resultado.innerHTML = `${pesoForm.value} ${alturaForm.value}`;
}