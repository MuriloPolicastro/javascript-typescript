const pesoForm = document.querySelector('#peso');
const alturaForm = document.querySelector('#altura')

function enviar(imc){
    const peso = Number(pesoForm.value);
    const altura = Number(alturaForm.value);
    imc = peso / (altura**2);
    
    if (!pesoForm.value || !alturaForm.value) {
        setResultado('Peso e/ou Altura digitados são inválidos', false);
        return
    }

    if (pesoForm.value <= 0 || alturaForm.value <= 0) {
        setResultado('Peso e/ou Altura devem ser diferentes de 0', false);
        return
    }
    if (imc >= 40) return setResultado (`Seu IMC é ${imc.toFixed(2)} (Obesidade Grau 3)`, true);
    if (imc >= 35) return setResultado (`Seu IMC é ${imc.toFixed(2)} (Obesidade Grau 2)`, true);
    if (imc >= 30) return setResultado (`Seu IMC é ${imc.toFixed(2)} (Obesidade Grau 1)`, true);
    if (imc >= 25) return setResultado (`Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`, true); 
    if (imc > 18.5)return setResultado (`Seu IMC é ${imc.toFixed(2)} (Peso Normal)`, true); 
    if (imc < 18.5) return setResultado(`Seu IMC é ${imc.toFixed(2)} (Abaixo do Peso)`, true);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('g-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}