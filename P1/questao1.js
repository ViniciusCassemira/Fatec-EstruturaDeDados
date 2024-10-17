// Dupla: Eduardo Frasson / Vinicius Cruz

class Pilha {
    //método construtor
    constructor() {
        this.itens = []; //inicializa vazia
        this.tamanho = 0;//criada para substituir a função .length do array, conta os itens da pilha
        //quando excluimos uma posicão do array com delete, o .length considera essa posição mesmo estando <empty>
        //e isso era o motivo pelo qual nao estava funcionando como o esperado, pois na função pop() nós reduzimos
        //o tamanho com this.tamanho--;  
    }
        //função utilizada para adicionar elementos no topo da pilha
    push(elemento) {
        this.itens[this.tamanho] = elemento;
        this.tamanho ++;
    }

    //função utilizada para remover o item do topo da pilha, quando existente
    pop() {
        //o correto é utilizar ===, pois confere o tipo e o valor 
        //da variável, torna a verificação mais confiável
        if(this.tamanho === 0){
            return "Pilha vazia, impossível remover";
        }
        let topo = this.itens[this.tamanho - 1]; //armazenando o item que sairá para exibi-lô mais tarde
        delete this.itens[this.tamanho-1]; //apagando o item do topo da pilha
        this.tamanho --; //diminuindo o tamanho da pilha
        return `Item removido: ${topo}`;
    }

    peek() {
        return this.itens[this.tamanho-1]; //retornando sem apagar o topo da pilha;
    }
}

let pilha = new Pilha();

pilha.push(1);
pilha.push(2);

console.log(pilha.pop()); //2
console.log(pilha.peek()); //1