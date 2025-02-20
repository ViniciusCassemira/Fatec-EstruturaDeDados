//------------------------------------------
//Exercício 01
//------------------------------------------
console.log("----- Exercício 01 -----");
class LinkedListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null; //A lista começa vazia
    }
    
    //Inserindo no fim da lista
    insertAtEnd(value){
        let newNode = new LinkedListNode(value);

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

    //exibir os interesses
    printList(){
        let current = this.head;
        let list = '';
        while (current !== null){
            list += current.value + ' >> ';
            current = current.next;
        }
        console.log(`Interesses do usuário: ${list} + null`);
    }
}

let vinicius = new LinkedList();
vinicius.insertAtEnd("Comida");
vinicius.insertAtEnd("Carros");
vinicius.insertAtEnd("Moda");

vinicius.printList();


//-----------------------------------
//Exercício 02
//-----------------------------------
console.log("----- Exercício 02 -----");

class DoublyLinkedListNode{
    constructor(value){
        this.value = value; 
        this.prev = null; //referência para o nó anterior
        this.next = null; //referência para o próximo nó
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.tamanho = 0;
    }
    //adicionando no final da lista 
    append(value){
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.tamanho ++;
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
}

let Doublylinkedlist = new DoublyLinkedList();
Doublylinkedlist.append("joão ~ Fala parceiro!");
Doublylinkedlist.append("Fênix ~ Não me mande mensagem seu pobre");
Doublylinkedlist.append("joão ~ Tudo bem então, desculpe");
Doublylinkedlist.append("Fênix ~ Tudo bem, apenas me deixe em paz :D");

Doublylinkedlist.traverse();
Doublylinkedlist.traverseReverse();


//----------------------------------------------
//Exercício 03
//----------------------------------------------
console.log("----- Exercício 03 -----");

class Grafo{
    constructor(){
        //Estrutura para armzenar os vértices e suas conexões.
        this.adjacencia = {};
    }

    //Adiciona um novo vértice ao grafo
    adicionarUsuario(_usuario){
        if (!this.adjacencia[_usuario]){
            this.adjacencia[_usuario] = [];
        }
    }

    //Adiciona uma aresta entre dois vértices (não dirigido)
    criarAmizade(_usuario1, _usuario2){
        if(!this.adjacencia[_usuario1]){
            this.adicionarUsuario(_usuario1);
        }
        if(!this.adjacencia[_usuario2]){
            this.adicionarUsuario(_usuario2);
        }
        this.adjacencia[_usuario1].push(_usuario2);
        this.adjacencia[_usuario2].push(_usuario1);
    }
    //ver amizade por usuário
    verAmizade(_usuario){
        console.log(`Amizades de ${_usuario}: ${this.adjacencia[_usuario].join(', ')}`)
    }
    
    //ver amizade de todos os usuários
    verAmizadeTodos(){
        console.log("Conexões dos usuários")
        for (let usuario in this.adjacencia){
            console.log(`${usuario} -> ${this.adjacencia[usuario].join(', ')}`);
        }
    }

}

let grafo = new Grafo();

grafo.adicionarUsuario("Vinicius");
grafo.adicionarUsuario("Jorge");
grafo.adicionarUsuario("Deivide");
grafo.adicionarUsuario("Matheus");

grafo.criarAmizade("Vinicius","Jorge");
grafo.criarAmizade("Vinicius","Deivide");
grafo.criarAmizade("Vinicius","Matheus");
grafo.criarAmizade("Deivide","Matheus");


grafo.verAmizade('Vinicius');

//----------------------------------------------
//Exercício 04
//----------------------------------------------
console.log("----- Exercício 04 -----");

class BinaryTreeNode{
    constructor(_id){
        this.id = _id; //Valor armazenado no nó
        this.mensagem = []; // mensagens enviadas por esse usuário
        this.left = null; //Referência para o nó filho à esquerda
        this.right = null; //Referência para o nó filho à direita
    }
}

//Classe binaryTree para representar a árvore binária   
class BinaryTree{
    constructor(){
        this.root = null; //inicialmente a árvore está vazia, então a raiz é null
    }

    //método para inserir um id na árvore
    insertId(_id, _mensagem){
        //caso o id não esteja na árvore, é criado um novo já inserindo a mensagem
        if(!(this.search(_id))){
            const newNode = new BinaryTreeNode(_id); //Cria um novo nó com o valor passado
            newNode.mensagem.push(_mensagem);

            if(this.root === null){
                //Se a árvore estiver vazia, o novo nó se torna a raiz
                this.root = newNode;
            }else{
                //Caso contrário, insere o nó na posição correta
                this._insertId(this.root, newNode);
            }
        //caso o ID já esteja na árvore, inserimos a msg em seu array sem duplicar o ID
        }else{
            this.insertJustMsg(_id,_mensagem);
        }
    }

    //Método auxiliar para encontrar a posição correta e inserir o nó na árvore
    _insertId(node, newNode) {
        if (newNode.id < node.id){
            //Se o valor do novo nó for menor que o valor do nó atual, vá para a subárvore esquerda
            if (node.left === null){
                //Se não houver nó à esquerda, insere o nó aqui
                node.left = newNode;
            }else{
                //Caso contrário, chama o método recursivamente na subárvore esquerda 
                this._insertId(node.left, newNode);
            }
        }else{
            //Se o valor do nó for maior ou igual ao valor do nó atual, vá para a subárvore direita
            if(node.right === null){
                //Se não houver nó à direita, insere o novo nó aqui
                node.right = newNode;
            }else{
                //Caso contrário, chama o método recursivamente na subárvore direita
                this._insertId(node.right, newNode);
            }
        }
    }

    //caso exista o usuário, usamos seu ID para inserir em seu array
    insertJustMsg(_id, _mensagem){
        return this._insertJustMsg(this.root, _id, _mensagem);
    }

    //Método auxiliar para inserir uma mensagem no nó correto
    _insertJustMsg(node, _id, _mensagem){
        if(node === null){
            //Se o nó atual é null, o valor não está na árvore
            return false;
        }
        if (_id === node.id) {
            //se o id do usuário for encontrado, adicionamos a mensagem em seu array
            node.mensagem.push(_mensagem);
            return true;
        }else if(_id < node.id){
            //Se o valor procurado é menor, continua a busca da subárvore esquerda
            return this._insertJustMsg(node.left, _id, _mensagem);
        }else{
            //Se o valor procurado é maior, continua a busca da subárvore direita
            return this._insertJustMsg(node.right, _id, _mensagem);
        }
    }

    //Método para buscar um ID na árvore
    search(_id){
        return this._searchId(this.root, _id); //Inicia a busca a partir da raiz
    }

    //Método auxiliar para realizar a busca recursivamente
    _searchId(node, _id){
        if(node === null){
            //Se o nó atual é null, o valor não está na árvore
            return false;
        }
        if (_id === node.id) {
            //se o valor é encontrado retorna true
            return node.mensagem;
        }else if(_id < node.id){
            //Se o valor procurado é menor, continua a busca da subárvore esquerda
            return this._searchId(node.left, _id);
        }else{
            //Se o valor procurado é maior, continua a busca da subárvore direita
            return this._searchId(node.right, _id);
        }
    }

    buscarMensagem(_id){
        const mensagens = this.search(_id);
        if (mensagens) {
            console.log(`Mensagens enviadas pelo usuário de ID ${_id}: ${mensagens}`);
        } else {
            console.log('ID não encontrado na árvore');
        }
    }
}

let Binarytree = new BinaryTree();

Binarytree.insertId(20, "primeira mensagem");
Binarytree.insertId(20, "segunda mensagem");
Binarytree.buscarMensagem(20); // Passando o ID 20 para buscar as mensagens

Binarytree.insertId(4, "Vai corinthians");
Binarytree.insertId(4, "Yuri Alberto minha nossa senhora");
Binarytree.buscarMensagem(4);


//---------------------------------------------------
//Exercício 5
//---------------------------------------------------
console.log("----- Exercício 05 -----");

//Outros estão no decorrer do exercícios

//Exibir as conxões de todos os usuários
//(Método está no exerício 03)
grafo.verAmizadeTodos();