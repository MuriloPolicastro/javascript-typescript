const numero = Number(prompt('Digite um número:'))
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p> A raiz quadrado dele é ${numero**1/2} </p>`
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)} </p>`