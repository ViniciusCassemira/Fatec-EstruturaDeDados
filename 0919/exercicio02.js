//implemente uma pilha em JavaScript que simule um sistema de 
//desfazer(undo). A pilha deve armezenar açoes executadas e 
//permitir desfazer a última ação.O exercício consiste em 
//implementar as funções adicionarAcao para adicionar uma
//ação na pilha e desfazer para remover e mostrar a ultima ação

class PilhaAcoes{
    constructor(){
        this.pilha = [];
    }

    adicionarAcao(acaoAtual){
        this.pilha.push(acaoAtual)
        console.log(`acao realizada: ${acaoAtual}`)
    }
    
    desfazer(){
        console.log(`Ação desfeita: ${this.pilha.pop()}`)
    }   
}

historico = new PilhaAcoes();
historico.adicionarAcao('Colou texto no bloco de notas');
historico.adicionarAcao('Modificou o texto do bloco de notas');
historico.adicionarAcao('Excluiu todo o conteúdo do bloco de notas');
historico.desfazer();
console.log(historico.pilha)
