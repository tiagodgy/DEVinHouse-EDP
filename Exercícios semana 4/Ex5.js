class Personagem{
  constructor(nome, percentualVida = 100){
    this.nome = nome
    this.percentualVida = percentualVida
  }
  sofreuDano(percentualDano){ 
    if(this.percentualVida > percentualDano){
        this.percentualVida = this.percentualVida - percentualDano
    }
    else{
        this.percentualVida = 0
    }
  }
  usouKitMedico(){
    if(this.percentualVida <= 90){
        this.percentualVida = this.percentualVida + 10
    }
    else{
        this.percentualVida = 100  
    }
  }
}
const guerreiro = new Personagem("Tiago")

guerreiro.sofreuDano(50)
guerreiro.usouKitMedico()

console.log(guerreiro)