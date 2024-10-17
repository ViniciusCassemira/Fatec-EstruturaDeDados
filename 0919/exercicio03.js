//Implemente uma fila de atendimento em javaScript para um
//caixa de supermercado. A fila deve permitir adicionar clientes
//e atender o cliente que está na frente da fila. O exercídio consiste
//em criar as funções acicionarCliente para adicionar um clente à fila e 
//atenderCliente para remover o cliente que está sendo atendido

class FilaAtendimento{
    constructor(){
        this.fila = []
    }

    adicionarCliente(nome){
        this.fila.push(nome)
        console.log(`Cliente ${nome} entrou na fila`)
    }

    atenderCliente(){
        console.log(`Cliente ${this.fila.shift()} foi atendido`)
    }
}

filaMercado = new FilaAtendimento();

filaMercado.adicionarCliente('Caio');
filaMercado.adicionarCliente('Marta');
filaMercado.atenderCliente();