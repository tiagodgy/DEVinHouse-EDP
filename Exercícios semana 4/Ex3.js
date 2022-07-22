class Funcionario{
    constructor(cpf, nome, salario){
        this.cpf = cpf;
        this.nome = nome;
        this.salario = salario;
    }

    promocao(aumento){
        this.salario = this.salario * ((100 + aumento)/100)
    }
}

const tiago = new Funcionario( 513000000, 'Tiago', 1000 )

console.log(tiago.salario)

tiago.promocao(10)
console.log(tiago.salario)