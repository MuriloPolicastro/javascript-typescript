const pesoForm = document.querySelector('#peso');
const alturaForm = document.querySelector('#altura')
const resultado = document.querySelector('.resultado');

function enviar(imc){
    const peso = Number(pesoForm.value);
    const altura = Number(alturaForm.value);
    imc = peso / (altura**2);
    
    if (!pesoForm.value || !alturaForm.value) {
        window.alert('Peso e/ou Altura digitados são inválidos')
    } else if (pesoForm.value <= 0 || alturaForm.value <= 0) {
        window.alert('Peso e/ou Altura devem ser diferentes de 0')
    } else {
        if (imc < 18.5) {
            resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do Peso)`;
        } else if (imc > 18.5) {
            resultado.innerHTML = `Seu IMC é ${imc} (Peso Normal)`;
        } else if (imc >= 25) {
            resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
        } else if (imc >= 30) {
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade Grau 1)`;
        } else if (imc >= 35) {
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade Grau 2)`;
        } else if (imc >= 40) {
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade Grau 3)`;
        }
    }
}

function criaP () {
    const p = document.createElement('p');
    return p;
}