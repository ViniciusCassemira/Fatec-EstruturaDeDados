class Node{
    constructor(value){
        this.value = value;
        this.next = null; //Próximo nó
        this.prev = null; //Nó anterior
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null; //Primeiro nó (cabeça)
        this.tail = null; //Último nó (cauda)
        this.length = 0; //Tamanho da lista
    }

    //adicionar um nó no final da lista
    append(value){
        const newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length ++;
    }

    //adicionar um nó ao início da lista
    prepend(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length ++;
    }

    //remover o nó do final da lista
    removeLast(){
        if(!this.tail) return null;

        const removedNode = this.tail;
        if (this.tail === this.head){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length --;
        return removedNode.value;
    }

    //remove o nó do início da lista
    removeFirst(){
        if (!this.head) return null;

        const removedNode = this.head;
        if (this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length --;
        return removedNode.value;
    }

    //percorrer a lista do início ao fim
    traverse(){
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    //percorrer a lista do fim  ao início
    traverseReverse(){
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    // ---------- métodos criados para os exercícios ----------
    
    //Insere um item na lista a partir da posição desejada (se possível)
    insertAt(value, index){ //recebe o valor que será inserido e a 'posição' na lista

        //caso o index seja inválido para inserção
        if(index > this.length + 1 || index < 0){
            console.log(`${index} não é um índice válido para inserir`);
            return;
        } 

        const newNode = new Node(value); //criamos um novo nó com o valor passado na funçao insertAt()
        let current = this.head; //usado para manipularmos a inserção do novo nó entre nós existentes
        let i = 0 //variável de controle para o while
        
        //caso a lista esteja vazia
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
            console.log("Inserido com sucesso - lista iniciada");
            return 
        }

        //caso o nó seja inserido o início da lista
        if(index === 0){
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length ++;
            console.log(`O item ${value} foi Inserido no início com sucesso.`);
            return;
        }

        //caso o nó seja inserido no final da lista
        if (index == this.length){
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.length ++;
            console.log(`O item ${value} foi Inserido no final com sucesso.`);
            return;
        }
        
        //usado para encontrarmos o nó na posição em que o novo nó será inserido,
        //e realizar as modificações dos ponteiros a partir daqui
        while(i !== index){
            current = current.next;
            i++
        }
        
        //realizando as modificações de ponteiro, reajustando a lista
        current.prev.next = newNode;
        newNode.prev = current.prev;
        current.prev = newNode;
        newNode.next = current;
        this.length ++;
        
        console.log(`O item ${value} foi inserido na posição ${index}`);
        return;
    }

    //Procura um nó na lista pelo seu index
    find(index){

        //caso a lista esteja vazia
        if(!this.head){
            console.log("-1");
            return;
        }
        
        //caso o index seja inválido para busca
        if(index > this.length-1 || index < 0){
            console.log("-1");
            return;
        }

        
        let i = 0; //variável de controle
        let current = this.head //a partir da cabeça de lista, fazemos a procura da posição deseja

        //usado para encontrar qual nó se encontra na posição(index) fornecido no começo da função
        while(i !== index){
            current = current.next;
            i++;
        }
        console.log(`Valor na posição ${index}: ${current.value}`);
        return;
    }

    //Remove um nó na lista pelo seu index
    removeAt(index){

        //caso a lista esteja vazia
        if(!this.head){
            console.log("Lista vazia, impossível remover");
            return;
        } 
            
        //caso seja inválido para realizarmos a remoção
        if(index > this.length || index < 0){
            console.log(`O posição ${index} não é válida para remoção`);
            return;
        } 

        let current = this.head; //apartir da cabeça de lista, fazemos a procura da posição deseja
        let i = 0; //variável de controle

        //usado para encontrar qual nó se encontra na posição(index) fornecido no começo da função
        while (i !== index){
            current = current.next;
            i++;
        }

        //caso o nó desejado seja o primeiro da lista
        if(current === this.head){
            current.next.prev = null;
            this.head = current.next;
            console.log(`Item na posição inicial foi removido com sucesso`);
            this.length --;
            return;
        }

        //caso o nó desejado seja o último da lista
        if(current === this.tail){
            current.prev.next = null;
            this.tail = current.prev;
            console.log(`Item na posição final foi removido com sucesso`);
            this.length --;
            return;
        }
        
        //mensagem de êxito
        console.log(`Item na posição ${index} foi removido com sucesso`);
        
        //caso não seja o primeiro ou o último, reajustamos os ponteiros 
        //do nó anterior e próximo do nó que desejamos excluir
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length --;
    }

}

//Exemplo de uso

// const list = new DoublyLinkedList();

// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.append(60);

// console.log("Percorrendo do início ao fim:");
// list.traverse();

// list.prepend(5);

// console.log("Percorrendo do início ao fim após adição no início");
// list.traverse();

// list.removeLast();
// console.log("Percorrendo após remover o último nó");
// list.traverse();

// list.removeFirst();
// console.log("Percorrendo após remover o primeiro nó");
// list.traverse();

// console.log("Percorrendo em ordem inversa");
// list.traverseReverse();

// //usando as funções criadas através dos exercícios:

// //Inserindo por 'posição:'
// list.insertAt(25,1232);

// //Procurando por 'posição'
// list.find(1230);

// //Removendo por 'posição'
// list.removeAt(2);

// console.log("Percorrendo a lista após as alterações:");
// list.traverse();

