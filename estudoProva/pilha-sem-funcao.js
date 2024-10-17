class Pilha{
    constructor(){
        this.itens = [],
        this.inicio = 0,
        this.fim = 0;
    }

    //adicionnar no final da pilha
    push(item){
        this.itens[this.final]=item;
        this.fim++;
        console.log("Item adicionado no topo da pilha");
    }
    
    //remover do fim da pilha
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        delete this.itens[this.fim];
        this.fim--;
        console.log("Item removido do topo da pilha")
    }

    isEmpty(){
        return this.inicio === this.fim;
    }

    peek(){
        if(this.isEmpty){
            return undefined;
        }
        return this.itens[this.fim];
    }

    size(){
        return this.fim;
    }

    clear(){
        this.itens = [];
        this.inicio =  0;
        this.inicio = 0;
    }
}