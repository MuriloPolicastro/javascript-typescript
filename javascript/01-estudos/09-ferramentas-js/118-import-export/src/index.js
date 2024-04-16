// Aqui deverá seguir o mesmo nome dos elementos exportados que deseja importar e selecionar o arquivo que estão os elementos.

// Para alterar o nome na importação deverá seguir ('nome_exportado' as 'novo_nome').

import qualquerNome, { nome as nomeimp, sobrenome2, idade } from  './modulo1';

/* O modelo abaixo serve para importar o default e não deverá estar entre chaves.
import qualquerNome from './modulo1';
*/

/*
Este modelo serve para importar tudo em um único objeto.
import * as MeuModulo from './modulo1';
*/

const nome = 'Nicole'

console.log(nomeimp, sobrenome2, idade);
console.log(qualquerNome(8, 4))