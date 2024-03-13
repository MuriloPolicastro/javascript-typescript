// Um metodo de instância é aquele que precisa instanciar 'chamar' o método atraves do objeto criado.

// O metodo estatico não precisa instancia, apenas chama a classe e ela aplica a todas.

// O método estático não tem acesso aos dados da instância.

// O método estático aponta direto para a classe.

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de Instância.
    aumentaVolume(){
        this.volume++;
    }

    diminuiVolume(){
        this.volume--;
    }

    // Método Estático.
    static trocaPilha(){
        console.log('Pillhas Trocadas');
    }
}

const c1 = new ControleRemoto('Samsung');
c1.aumentaVolume();
c1.aumentaVolume();
c1.aumentaVolume();
c1.diminuiVolume();
console.log(c1.volume);
ControleRemoto.trocaPilha();