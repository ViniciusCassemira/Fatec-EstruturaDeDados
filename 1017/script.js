class Node{
    constructor(value){
        this.value = value;
        this.next = null; //Ponteiro para o próximo nó    
    }
}

class LinkedList{
    constructor() {
        this.head = null; //A lista começa vazia
    }

    //Inserir no começo da lista
    insertAtBeginning(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    //Inserir no fim da lista
    insertAtEnd(value){
        let newNode = new Node(value);

        if (this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }

    //Remover um nó por valor
    removeByValue(value){
        if (this.head === null){
            return;
        }

        // se o nó a ser removido for o primeiro
        if (this.head.value === value){
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value){
            current = current.next;
        }

        if (current.next !== null){
            current.next = current.next.next;
        }
    }

    //Buscar um nó por valor
    find(value){
        let current = this.head;

        while (current !== null){
            if (current.value === value){
                return current;
            }
            current = current.next;
        }
        return null; //retorna null se o valor não for encontrado
    }

    //Exibir a lista (opcional, para facilitar a visualização)
    printList(){
        let current = this.head;
        let list = '';
        while (current !== null){
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'null');
    }
}

let list = new LinkedList();

//inserindo no início
list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);
list.printList();

//inserindo no fim
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtEnd(60);
list.printList();

//removendo um valor específico da lista
list.removeByValue(60)
list.printList();

//buscando um valor espefífico
console.log(list.find(20));