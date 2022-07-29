class Produto{
    constructor(nome, quantidade, valor){
        this.nome = nome
        this.quantidade = quantidade
        this.valor = valor
    }
}
function calculaTotal(...produtos){
    const somaTotal = produtos.reduce((acc, item)=> acc + (item.valor * item.quantidade), 0) 
    return somaTotal    
}   

const arroz = new Produto('arroz', 3, 9);
const feijao = new Produto('feijao', 2, 12);
const batata = new Produto('batata', 4, 8);
const macarrao = new Produto('macarrao', 1, 5);
const total = calculaTotal(arroz, feijao, batata, macarrao);
console.log(total);