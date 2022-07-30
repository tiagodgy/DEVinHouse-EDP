import Dica from "./Dica.js"
const btnLimpar = document.querySelector("#btnLimpar")
const btnSalvar = document.querySelector("#btnSalvar")
//btnLimpar.addEventListener("click",)
btnSalvar.addEventListener("click", criaObjeto)

const listaObj = []
let i = 0

function criaObjeto(){
    const titulo = document.querySelector("#titulo").value
    const linguagem = document.querySelector("#linguagem").value
    const categoria = document.querySelector("#categoria").value
    const descricao = document.querySelector("#descricao").value
    const video = document.querySelector("#video").value
    
    listaObj[i] = new Dica(titulo, linguagem, categoria, descricao, video)
    i = i +1
    console.log(listaObj)
}
