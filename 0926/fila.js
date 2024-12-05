class Fila{
    constructor(){
        this.itens = []; //usamos um objeto para armazenar os itens
        this.inicio = 0; //representa o índice do início da fila
        this.fim = 0; // representa o índice do fim da fila
    }

    //adiciona um elemento ao final da fila(enqueue)
    enqueue(elemento){
        this.itens[this.fim] = elemento;
        this.fim++;
    }

    //remove e retorna o primeiro elemento da fila (dequeue)
    dequeue(){
        if (this.isEmpty()){
            return undefined; // se a fila estiver vazia, retorna undefined
        }
        const item = this.itens[this.inicio]; //obtém o primeiro elemento
        delete this.itens[this.inicio]; //remove o item do início da fila
        this.inicio++; //move o índice do início para o próximo item
    
        //quando o inicio e o fim estiverem alinhados, redefine a fila
        if (this.inicio === this.fim){
            this.inicio = 0;
            this.fim = 0;
        }
        return item;
    }

    //retorna o primeiro elemento da fila sem removê-lo (peek)
    front(){
        if(this.isEmpty()){
            return undefined; //se a fila estiver vazia retorna indefinido
        }
        return this.itens[this.inicio]; //retorna o primeiro elmento
    }

    isEmpty(){
        return this.fim === this.inicio; //verifica se os íncides estão iguais
    }

    //retorna o tamanho da fila
    size(){
        return this.fim - this.inicio;
    }

    clear(){
        this.nome = {};
        this.inicio = 0;
        this.fim = 0;
    }
}

let fila = new Fila();

//adicionando clientes na fila criada
fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
fila.enqueue("Cliente 3");

console.log(fila.front()); //Saída: "Cliente 1"

console.log(fila.dequeue()); //Saída: "Cliente 1"
console.log(fila.dequeue()); //Saída: "Cliente 2"

fila.enqueue("Cliente 4");

console.log(fila.size()); //Saída: 2 (Cliente 3 e 4 estão na fila)
console.log(fila.dequeue()); //Saída: "Cliente 3"