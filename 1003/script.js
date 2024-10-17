class Carrinho{
    constructor(){
        this.itens = [];
        this.quantidade = 0;
        this.valor = [];
        this.valorTotal = 0;
    }

    adicionarProduto(produto, valor){
        this.itens[this.quantidade] = produto;
        this.valor[this.quantidade] = valor;
        this.quantidade ++;
        return `Produto ${produto} adicionado com sucesso`;
    }

    removerProduto(){
        if(this.quantidade === 0){
            console.log("Carrinho vazio");
            return;
        }
        const ultimaPosicao = this.quantidade-1;
        let nomeDeletado = this.itens[ultimaPosicao];
        delete this.itens[ultimaPosicao];
        delete this.valor[ultimaPosicao];
        this.quantidade --;
        return `Item ${nomeDeletado} removido com sucesso!`;
    }

    totalItens(){
        return `Quantidade de produtos no carrinho: ${this.quantidade}`;
    }

    verTotal(){
        this.valorTotal = 0
        this.valor.forEach(valorUnitario =>{
            this.valorTotal += valorUnitario;
        })
        return `Valor total do carrinho: ${this.valorTotal} `;
    }

    limparCarrinho(){
        if(this.quantidade === 0){
            return "Impossível limpar um carrinho vazio!";
        }
        itens.forEach(produto => {
            delete this.produto;
        });
        this.valor.forEach(valorUnitario => {
            delete this.valorUnitario;
        });
        this.valor = 0;
        this.quantidade = 0;
    }
}

carrinhoShein = new Carrinho();

console.log("==========Carrinho==========");
console.log(carrinhoShein.adicionarProduto('Macacão',120));
console.log(carrinhoShein.adicionarProduto('Chinelo',40));
console.log(carrinhoShein.removerProduto());
console.log(carrinhoShein.removerProduto());

console.log("==========Informações do carrinho==========");
console.log(carrinhoShein.totalItens());
console.log(carrinhoShein.verTotal());