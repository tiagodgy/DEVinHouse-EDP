class Juros{
    constructor(C, i, t){
        this.c = C
        this.i = i
        this.t = t
    }
    calcularJurosSimples(){
        const J = this.c * this.i * this.t
        return J
    }
    calcularJurosCompostos(){
        const M = this.c * ((1+this.i)**this.t)
        return M
    }
}

const emprestimo = new Juros(10000, 0.07, 24)

const emprestimo2 = new Juros(10000, 0.15, 10)

console.log(emprestimo.calcularJurosSimples())
console.log(emprestimo.calcularJurosCompostos())

console.log(emprestimo2.calcularJurosSimples())
console.log(emprestimo2.calcularJurosCompostos())
