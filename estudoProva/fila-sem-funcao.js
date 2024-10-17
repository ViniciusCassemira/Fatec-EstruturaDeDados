//estudo para nao rodar no dia da prova kk
class Fila{
    constructor(){
        this.fila = [],
        this.inicio = 0, 
        this.fim = 0;
    }
    
    enqueue(item){
        this.fila[this.fim] = item;
        this.fim ++;
        this.fila.push(item);
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        delete this.fila[this.inicio];
        this.inicio ++;
    }
    
    isEmpty(){
        return this.inicio === this.fim;
    }
    
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.fila[this.inicio];
    }

    size(){
        return this.fim - this.inicio;
    }
}

let fila1 = new Fila();

fila1.isEmpty();
fila1.enqueue("Vinícius");
console.log(fila1.size());
fila1.enqueue("Jonas");
console.log(fila1.size());
console.log(fila1.peek());
fila1.dequeue();
console.log(fila1.size());
fila1.isEmpty()