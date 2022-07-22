class Endereco {

    constructor(logradouro, numero, cidade, estado, pais, cep) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.uf = estado;
        this.pais = pais,
        this.cep = cep;
    }

    obterEndereco() {
        return `Logradouro: ${this.logradouro}, ${this.numero}, 
            ${this.cidade} / ${this.uf} - ${this.pais}
            CEP: ${this.cep}}`;
    }

}

class Pessoa{
    constructor
}