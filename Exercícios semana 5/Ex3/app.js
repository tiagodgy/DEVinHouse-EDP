const produtos = [
    { nome: 'arroz', preco: 9 },
    { nome: 'feijao', preco: 12 },
    { nome: 'batata', preco: 8 },
    { nome: 'macarrao', preco: 5 }
    ]

function buscar(){
    const produto = document.querySelector("#produto").value
    const found = produtos.find(prod => prod.nome == produto)
    const resultado = document.querySelector("#resultado")
    if(found){
        resultado.innerHTML =`O preço do item é R$ ${found.preco}`
    }
    else{
        resultado.innerHTML =`Produto não encontrado`
    }
    
}
const resultado2 = document.querySelector("#resultado2")
const soma = produtos.reduce((acc, item) => acc + item.preco, 0)
resultado2.innerHTML=`A soma dos valores da lista é R$ ${soma}`