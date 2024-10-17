class MeuArray{
    constructor(){
        this.itens = []; //usamos um objeto para armazenar os itens do array
        this.tamanho = 0; //mantemos o controle do tamanho do array
    }

    //adicionar um elemento ao final do array
    adicionar(elemento){
        this.itens[this.tamanho] = elemento; //insere no tamanho atual do tamanho
        this.tamanho ++; //incremento no tamanho
    }

    //remove o último elemento do array
    remover(){
        if(this.tamanho === 0){ //caso o estiver vazio, não removemos nada
        return undefined;
        }
        const ultimoItem = this.itens[this.tamanho -1]; //armazena o último item
        delete this.itens[this.tamanho - 1]; //remove o último item do array
        this.tamanho--; //decrementa o tamanho

        return ultimoItem; //retorna o item removido
    }
    //acessa o elemento em um índice específico
    obterElemento(indice){
        if (indice < 0 || indice>= this.tamanho){ //caso o índice esteja fora de alcance
            return undefined;
        }
        return this.itens[indice]; //retorna o item solicitado 
    }

    //retorna o tamanho do array
    tamanhoArray(){
        return this.tamanho;
    }

    //limpa o objeto e reinicia o tamanho 
    limpar(){
        this.itens = [];
        this.tamanho = 0;
    }
}

$numeros = new MeuArray();
$numeros.adicionar(15);
$numeros.adicionar(25);
$numeros.adicionar(10);

$numeros.obterElemento(0);
$numeros.tamanhoArray();

console.log($numeros.remover());
$numeros.tamanhoArray();

console.log($numeros);