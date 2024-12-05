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

// Exemplo de uso
$array = new MeuArray();

// Adicionano itens no array
$array.adicionar(10);
$array.adicionar(15);
$array.adicionar(25);

console.log($array.obterElemento(1)); //Saída: 15
console.log($array.tamanhoArray()); //Saída: 3

console.log($array.remover()); //Saída: 25 (Remove o último elemento)
console.log($array.tamanhoArray()); //Saída: 2