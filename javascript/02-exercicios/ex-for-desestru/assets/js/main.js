const elementos = [
    {tags: 'p', texto:'Qualquer coisa'},
    {tags: 'div', texto:'Frase 1'},
    {tags: 'section', texto:'Frase 2'},
    {tags: 'footer', texto:'Frase 3'}
];

const container = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let {tags, texto} = elementos[i];
    let criaTag = document.createElement(tags);
    criaTag.innerText = texto;
    div.appendChild(criaTag);
}

container.appendChild(div);