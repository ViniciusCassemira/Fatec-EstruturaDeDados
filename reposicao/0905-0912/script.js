class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtBeginning(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode;

    }

    removeByValue(value){
        if(this.head === null){
            return;
        }

        if(this.head.value === value){
            this.head = this.head.next;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value){
            current = current.next;
        }

        if (current.next !== null){
            current.next = current.next.next;
        }
    }

    find(value){
        let current = this.head;

        while(current !== null){
            if(current.value === value){
                return current;
            }
            current = current.next;
        }
        return null;
    }

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


//----- Exercício 01 -----
console.log("Exercício 1")
let trilha = new LinkedList();

//inserindo
trilha.insertAtBeginning("Cachoeira média");
trilha.insertAtEnd("Mirante");
trilha.insertAtEnd("Caverna");
trilha.insertAtBeginning("Ponte");
//removendo
trilha.removeByValue("Caverna");
//conferindo
console.log(trilha.find("Mirante"));


//----- Exercício 02 -----
console.log("Exercício 2")
let posicao = new LinkedList();

posicao.insertAtBeginning("Lenta");
posicao.insertAtEnd("Média");
posicao.insertAtEnd("Veloz");

posicao.removeByValue("Lenta");

console.log(posicao.find("Veloz"));
posicao.printList();


//----- Exercício 03 -----
console.log("Exercício 3")
let poderes = new LinkedList();

poderes.insertAtBeginning("Raio congelante");
poderes.insertAtEnd("Escudo de fogo");
poderes.removeByValue("Raio congelante");
console.log(poderes.find("Escudo de fogo"));