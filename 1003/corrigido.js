class Carrinho {
    constructor() {
        this.produtos = []; //amazenamos os objetos dos produtos adicionados
        this.itensCarrinho = 0; //quantidade de produtos no carrinho
        this.precoTotal = 0; //preco total do carrinho
    }

    adicionarProduto(produto, preco, quantidade) {
    let infoProduto = {
            nome: produto,
            preco: preco,
            precoTotalProduto: quantidade * preco
        }
        //outra forma de fazer
        // this.produtos[this.itensCarrinho] = {produto:produto, preco:preco, quantiadade:quantidade}
        this.produtos[this.itensCarrinho] = infoProduto
        this.precoTotal += infoProduto.precoTotalProduto
        this.itensCarrinho ++;
        console.log(`Produto ${infoProduto.nome} adicionado com sucesso!`);
    }

    removerProduto(){   
        if(this.itensCarrinho === 0){
            console.log("Impossível remover, carrinho sem produtos!");
            return;
        }
        
        const posicao = this.itensCarrinho -1;
        console.log(`O item ${this.produtos[posicao].nome} foi removido com sucesso`);
        this.precoTotal -= this.produtos[posicao].precoTotalProduto;
        delete this.produtos[posicao];
        this.itensCarrinho --;
    }

    precoTotalCarrinho(){
        if(this.itensCarrinho === 0){
            console.log("Impossível calcular valor, não há itens no carrinho!");
            return;
        }
        console.log(`Total do carrinho: ${this.precoTotal}`);
    }

    totalItens(){
        if(this.itensCarrinho === 0){
            console.log("Carrinho vazio.");
            return;
        }
        console.log(`Itens no carrinho: ${this.itensCarrinho}`);
    }

    limparCarrinho(){
        if(this.itensCarrinho == 0){
            console.log("O carrinho já está vazio!");
            return;
        }
        this.produtos.forEach(produtoAtual =>{
            delete this.produtoAtual;
        })
        this.precoTotal = 0;
        this.itensCarrinho = 0;
        console.log("Carrinho limpo com sucesso!");
    }
}

carrinhoDoVini = new Carrinho();

console.log("-----Adicionando-----")
carrinhoDoVini.adicionarProduto('Tenis da naike',280,2);
carrinhoDoVini.adicionarProduto('Camiseta',40,1);

console.log("-----Informações-----")
carrinhoDoVini.precoTotalCarrinho()
carrinhoDoVini.totalItens();

console.log("-----Alterações-----")
carrinhoDoVini.removerProduto();
carrinhoDoVini.totalItens();
carrinhoDoVini.precoTotalCarrinho()
carrinhoDoVini.limparCarrinho();