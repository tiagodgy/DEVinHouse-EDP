const btnPesquisar = document.querySelector("#pesquisar")
const resposta = document.querySelector("#gatinho")

btnPesquisar.addEventListener("click", cat)

async function cat(){
    try{
        const gato = await fetch(`https://api.thecatapi.com/v1/images/search`)
        const data = await gato.json()
        resposta.src = data[0].url
    }catch(err){
        console.error(err);
    }
    
}


cat()