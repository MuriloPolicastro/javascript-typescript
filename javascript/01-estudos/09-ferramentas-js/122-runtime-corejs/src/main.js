// Sempre que for necessario a aplicação rodar em navegadores mais antigos, deve ser usado esses 2 imports abaixo para sanar erros.
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import executa from './modules/promises';

import './assets/css/style.css'
executa();