class MinhaPilha {

    constructor(){
        this.itens = []; //Usamos um array  para armazenar os itens da pilha
        this.tamanho = 0; //Mantemos o controle do tamanho da pilha
    }

    //adicionar um elemento no topo da pilha
    adicionar(elemento){
        this.itens[this.tamanho] = elemento; //Insere o elemento na posição atual do tamanho
        this.tamanho ++; //Incremento no tamanho
    }

    //Remove e retorna o elemento do topo da lista
    remover(){
        if (this.tamanho === 0){
            return undefined; //Se a pilha estiver vazia, retorna undefined
        }
    
        const ultimoItem = this.itens[this.tamanho - 1]; //Captura o item no topo da lista
        delete this.itens[this.tamanho -1]; //Remove o item do topo
        this.tamanho--; //Decrementa o tamanho

        return ultimoItem; //Retorna o item removido
    }

    //Retorna o elemento no topo da pilha sem removê-lo
    topo(){
        if(this.tamanho === 0){
            return undefined; //Se a pilha estiver vazia retorna undefined
        }
        return this.itens[this.tamanho - 1]; //Retorna o item do topo
    }

    //Verifica se a pilha está vazia
    estaVazia(){
        return this.tamanho === 0; //Verifica se o tamanho da pilha é zero
    }

    //Retorna o número de elementos da pilha
    tamanhoPilha(){
        return this.tamanho; //Retorna o tamanho da pilha
    }

    //Limpa a pilha
    limpar(){
        this.itens = []; //Reinicializa os itens
        this.tamanho = 0; //Reseta o tamanho
    }
}

//Exemplo de uso

let pilha = new MinhaPilha(); 

//adicionando valores na pilha criada
pilha.adicionar(1);
pilha.adicionar(2);
pilha.adicionar(3);

//Manipulando pilha
console.log(pilha.topo()); //Saída: 3 (Mostra o elemento do topo)
console.log(pilha.remover()); //Saída: 3 (Remove o elemento do topo)
console.log(pilha.topo()); //Saída: 2 (Mostra o elemento do topo, que agora é 2)
console.log(pilha.tamanhoPilha()); //Saída 2 (Dois elementos na pilha)