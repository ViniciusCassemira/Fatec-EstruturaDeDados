class Grafo{
    constructor(){
        //Estrutura para armzenar os vértices e suas conexões.
        this.adjacencia = {};
    }

    //Adiciona um novo vértice ao grafo
    adicionarVertice(vertice){
        if (!this.adjacencia[vertice]){
            this.adjacencia[vertice] = [];
        }
    }

    //Adiciona uma aresta entre dois vértices (não dirigido)
    adicionarAresta(vertice1, vertice2){
        if(!this.adjacencia[vertice1]){
            this.adicionarVertice(vertice1);
        }
        if(!this.adjacencia[vertice2]){
            this.adicionarVertice(vertice2);
        }
        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    //Remove uma aresta entre dois vértices
    removerAresta(vertice1, vertice2){
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
    }

    // Remove um vértice e suas conexões.
    removerVertice(vertice){
        while (this.adjacencia[vertice]?.length){
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }
        delete this.adjacencia[vertice];
    }

    // Exibe o grafo.
    imprimirGrafo(){
        for (let vertice in this.adjacencia){
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }

    //Exercício
    findShortestPath(startNode, endNode) {
        const queue = [startNode];
        const visited = { [startNode]: true };
        const predecessor = {};
    
        while (queue.length) {
          const currNode = queue.shift();
          const neighbors = this.adjacencia[currNode];
    
          for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              predecessor[neighbor] = currNode;
              queue.push(neighbor);
    
              if (neighbor === endNode) {
                const shortestPath = [endNode];
                let prevNode = currNode;

                while (prevNode !== startNode) {
                    shortestPath.unshift(prevNode);
                    prevNode = predecessor[prevNode];
                }
    
                shortestPath.unshift(startNode);
                return shortestPath;
              }
            }
          }
        }
        return null;
    }
}

// Exemplo de uso
console.log("---- Exemplo ----");
const meuGrafo = new Grafo();
meuGrafo.adicionarVertice('A');
meuGrafo.adicionarAresta('A', 'B');
meuGrafo.adicionarAresta('A', 'C');
meuGrafo.adicionarAresta('B', 'D');
meuGrafo.imprimirGrafo();

// Exercícios
console.log("---- Exercício 1 ----");
const exercicio = new Grafo();
exercicio.adicionarVertice('1');
exercicio.adicionarVertice('2');
exercicio.adicionarVertice('3');
exercicio.adicionarVertice('4');
exercicio.adicionarAresta('1','2');
exercicio.adicionarAresta('1','3');
exercicio.adicionarAresta('2','4');
exercicio.removerVertice('2');
exercicio.imprimirGrafo();

console.log("---- Exercício 2 ----");
const exercicio2 = new Grafo();
exercicio2.adicionarVertice('1');
exercicio2.adicionarVertice('2');
exercicio2.adicionarVertice('3');
exercicio2.adicionarVertice('4');
exercicio2.adicionarVertice('5');

exercicio2.adicionarAresta('1','3');
exercicio2.adicionarAresta('3','5');

exercicio2.adicionarAresta('1','2');
exercicio2.adicionarAresta('2','3');
exercicio2.adicionarAresta('3','4');
exercicio2.adicionarAresta('4','5');

exercicio2.imprimirGrafo();
console.log(exercicio2.findShortestPath('1', '5'));