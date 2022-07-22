class CalculadorDeAreas{
    constructor(tipo, base, altura){
        this.tipo = tipo
        this.base = base
        this.altura = altura
        this.area = 0
    }
    calcular(){
        if(this.tipo == "triangulo"){
            this.area = (this.base*this.altura)/2
        }
        else if(this.tipo == "quadrado" || this.tipo == "retangulo"){
            this.area = (this.base*this.altura)
        }
        return this.area
    }
}

const forma1 = new CalculadorDeAreas("triangulo", 6, 8)

console.log(forma1.calcular())

const forma2 = new CalculadorDeAreas("quadrado", 4, 4)

console.log(forma2.calcular())

const forma3 = new CalculadorDeAreas("retangulo", 4, 6)

console.log(forma3.calcular())