'use strict';

import { 
    configurarNavbar, 
    configurarHeader,
    atualizarAno,
    itemInativo
} from '../../components/js/atualizacoes.js';

configurarNavbar();
configurarHeader();
itemInativo();

atualizarAno();
// Configura um intervalo para atualizar o ano a cada segundo (opcional)
setInterval(atualizarAno, 1000);