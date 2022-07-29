const btnConsultar = document.querySelector("#btnConsultar")
const resposta = document.querySelector("#resposta")

btnConsultar.addEventListener("click", consultaCep)

async function consultaCep(){
    try{
        const cep = document.querySelector("#cep").value
        const endereco = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        return endereco.json().then(jason => resposta.innerHTML = jason.localidade )
    }catch(err){
        console.error(err);
    }
    
}



