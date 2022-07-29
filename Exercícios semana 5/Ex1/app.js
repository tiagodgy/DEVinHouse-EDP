const btn = document.querySelector("button")
const paragraf = document.querySelector("p")

const mensagemOla = () => { 
    const nome = document.querySelector("#nome").value
    paragraf.innerText =`Olá, ${nome}!`
}