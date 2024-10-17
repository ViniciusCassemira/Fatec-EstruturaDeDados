class Fila {
  constructor() {
    // Ajustado tipagem inicial da lista de itens como array
    this.itens = [];

    // Ajustado valor inicial do inicio da fila como 0
    this.inicio = 0;

    // Ajustado valor inicial do fim da fila como 0
    this.fim = 0;
  }

  enqueue(elemento) {
    this.itens[this.fim] = elemento;
    this.fim++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    // Ajustado para const o tipo de variável, tendo em vista que o valor não será alterado
    const primeiro = this.itens[this.inicio];
    delete this.itens[this.inicio];
    this.inicio++;
    return primeiro;
  }

  isEmpty() {
    return this.fim - this.inicio === 0;
  }

  peek() {
    return this.itens[this.inicio]
  }
}

let fila = new Fila();

fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");

console.log(fila.dequeue()); // A
console.log(fila.peek()); // B