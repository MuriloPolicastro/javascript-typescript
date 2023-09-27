const tarefa = document.querySelector('.tarefas');
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

function adicionaTarefa(inputText) {
    const li = criarLi();
    li.innerText = inputText;
    tarefa.appendChild(li);
    limpaInput();
    criaApagar(li)
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    adicionaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        adicionaTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefas of liTarefas) {
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefaSalva () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        adicionaTarefa(tarefa);
    }
}
adicionaTarefaSalva();