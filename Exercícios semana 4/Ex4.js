class Fatura{
    constructor(sku, descricao, quantidade = 0, preco = 0){
        this.sku = sku
        this.descricao = descricao
        this.quantidade = quantidade
        this.preco = preco
    }
    
    obterValorTotal(){
        if(this.preco <0){
            this.preco = 0
        }
        if(this.quantidade <0){
            this.quantidade = 0
        }
        const valor = this.quantidade * this.preco
        return valor 
    }
}

const pedido = new Fatura(00001, "Produto X", 50, 50)

console.log(pedido.obterValorTotal())