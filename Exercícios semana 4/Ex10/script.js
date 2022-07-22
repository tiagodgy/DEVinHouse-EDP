class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada);
    }
}

const usuario1 = new Usuario("Tiago", "tiagogodoymoreira@gmail.com", "teste")

function acessar(){
    const login = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    const div = document.querySelector("#resultado")
    if(usuario1.autenticar(login, senha)){
        const aviso = document.createElement("p")
        aviso.innerText = "Login efetuado com sucesso!"
        aviso.style.color="green"
        div.removeChild(div.lastChild)
        div.appendChild(aviso)
    }
    else{
        const aviso = document.createElement("p")
        aviso.innerText = "Não foi possível efetual login :("
        aviso.style.color="red"
        div.removeChild(div.lastChild)
        div.appendChild(aviso)
    }

}