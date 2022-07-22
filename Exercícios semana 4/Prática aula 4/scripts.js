class Tarefa{
    constructor(id, descricao){
        this.id = id
        this.descricao = descricao
        this.concluida = false
    }
}

const btnAdicionar = document.querySelector("#btnAdicionar")
btnAdicionar.addEventListener('click', adicionar)

const arr =[]
let i = 0
let tarefa = []
function adicionar(){
    const input = document.querySelector("#inputTarefa").value
    i = i+1
    tarefa[i] = new Tarefa(i,input)
    const itemLista = document.createElement("li")
    itemLista.innerHTML = tarefa[i].descricao
    const lista = document.querySelector("#lista")
    lista.appendChild(itemLista)
    console.log(tarefa[i-1])
    console.log(tarefa[i])
}