//
class Node{
    constructor(value){
        this.value = value; //Valor armazenado no nó
        this.left = null; //Referência para o nó filho à esquerda
        this.right = null; //Referência para o nó filho à direita
    }
}

//Classe binaryTree para representar a árvore binária   
class BinaryTree{
    constructor(){
        this.root = null; //inicialmente a árvore está vazia, então a raiz é null
    }

    //método para inserir um valor na árvore
    insert(value){
        const newNode = new Node(value); //Cria um novo nó com o valor passado
        if(this.root === null){
            //Se a árvore estiver vazia, o novo nó se torna a raiz
            this.root = newNode;
        }else{
            //Caso contrário, insere o nó na posição correta
            this._insertNode(this.root, newNode);
        }
    }

    //Método auxiiar para encontrar a posição correta e inserir o nó na árvore
    _insertNode(node, newNode) {
        if (newNode.value < node.value){
            //Se o valor do novo nó for menor que o valor do nó atual, vá para a subárvore esquerda
            if (node.left === null){
                //Se não houver nó à esquerda, insere o nó aqui
                node.left = newNode;
            }else{
                //Caso contrário, chama o método recursivamente na subárvore esquerda 
                this._insertNode(node.left, newNode);
            }
        }else{
            //Se o valor do nó for maior ou igual ao valor do nó atual, vá para a subárvore direita
            if(node.right === null){
                //Se não houver nó à direita, insere o novo nó aqui
                node.right = newNode;
            }else{
                //Caso contrário, chama o método recursivamente na subárvore direita
                this._insertNode(node.right, newNode);
            }
        }
    }

    //Percurso em-ordem: visita a subárvore esquerda, o nó atual e a subárvore direita
    inOrder(node = this.root){
        if(node !== null){
            this.inOrder(node.left); //Visita a subárvore esquerda
            console.log(node.value); //Visita o nó atual
            this.inOrder(node.right); //Visita a subárvore direita
        }
    }

    //Percurso pré-ordem: visita o nó atual, a subárvore esquerda e a subárvore direita
    preOrder(node = this.root){
        if(node !== null){
            console.log(node.value); //Visita o nó atual
            this.preOrder(node.left); //Visita a subárvore esquerda
            this.preOrder(node.right); //Visita a subárvore direita
        }
    }

    //Percurso pós-ordem: visita a subárvore esquerda, a subárvore direita e o nó atual
    postOrder(node = this.root){
        if(node!== null){
            this.postOrder(node.left); //Visita a subárvore da esquerda
            this.postOrder(node.right); //Visita a subárvore da direita
            console.log(node.value); //visita o nó atual
        }
    }

    //Método para buscarum valor na árvore
    search(value){
        return this._searchNode(this.root, value); //Inicia a busca a partir da raiz
    }

    //Método auxiliar para realizar  a busca recursivamente
    _searchNode(node, value){
        if(node === null){
            //Se o nó atual é null, o valor não está na árvore
            return false;
        }
        if (value === node.value) {
            //se o valor é encontrado retorna true
            return true;
        }else if(value < node.value){
            //Se o valor procurado é menor, continua a busca da subárvore esquerda
            return this._searchNode(node.left, value);
        }else{
            //Se o valor procurado é maior, continua a busca da subárvore direita
            return this._searchNode(node.right, value);
        }
    }

    //Método para remover um nó com um valor específico
    remove(value){
        this.root = this._removeNode(this.root, value); //Inicia a remoção a partir da raiz
    }

    //Método auxiliar para remover o nó recursivamente
    _removeNode(node, value){
        if (node === null){
            return null; //se o nó é null, não tem nada para remover
        }

        if(value < node.value){
            //Se o valor a ser removido é menor, continua na subárvore esquerda
            node.left = this._removeNode(node.left, value);
            return node;
        } else if(value > node.value){
            //Se o valor a ser removido é maior, continua na subárvore direita
            node.right = this._removeNode(node.right, value);
            return node;
        }else{
            //Se o valor é igual ao nó atual, este é o nó a ser removido

            //caso 1: Nó sem filhos (nó folha)
            if(node.left === null && node.right=== null){
                node = null; //Remove o nó ao definir como null
                return node;
            }

            //caso 2:Nó com um filho
            if (node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            //Caso 3: Nó com 2 filhos
            //Encontra o nó com o menor valor na subárvore direita
            const aux = this._findMinNode(node.right);
            node.value = aux.value; // Substitui o valor do nó atual pelo valor mínimo encontrado
            node.right = this._removeNode(node.right, aux.value); //Remove o nó duplicado na subárvore direita
            return node;
        }
    }

    _findMinNode(node) {
        while (node.left !== null) {
            node = node.left; // Continua indo para a esquerda até encontrar o menor valor
        }
        return node;
    }
    
}
 
// Exemplo de uso da árvore binária
const tree= new BinaryTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(18);
tree.insert(25);

console.log("Percurso em-ordem");
tree.inOrder();

// console.log("Percurso pre-ordem");
// tree.preOrder();
// console.log("Percurso pos-ordem");
// tree.postOrder();

console.log("Buscar valor 18");
console.log(tree.search(18) ? "Encontrado" : "Não encontrado");

console.log("Remover valor 10:");
tree.remove(10);
tree.inOrder();
