function timer() {
    function criaSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const timer = document.querySelector('.timer');
    let segundos = 0;
    let relogio;

    function iniciarTimer() {
        relogio = setInterval(function () {
            segundos++;
            timer.innerHTML = criaSegundos(segundos)
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            timer.classList.remove('pausado');
            clearInterval(relogio);
            iniciarTimer();
        }

        if (el.classList.contains('pausar')) {
            timer.classList.add('pausado');
            clearInterval(relogio);
        }

        if (el.classList.contains('zerar')) {
            timer.classList.remove('pausado');
            clearInterval(relogio);
            timer.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
}

timer();

