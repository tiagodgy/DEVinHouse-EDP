class Time{
    constructor(nome, sigla, vitorias, derrotas, empates){
        this.nome = nome
        this.sigla = sigla
        this.vitorias = vitorias
        this.derrotas = derrotas
        this.empates = empates
    }
    get nJogos(){
        const totalJogos = this.vitorias + this.derrotas + this.empates
        return totalJogos
    }
    get nPontos(){
        const totalPontos = (this.vitorias * 3) + this.empates
        return totalPontos
    }
    conmputarPartida(partida){
        if(partida.vencedor() == this.sigla){
            this.vitorias = this.vitorias + 1
        }
        else if(partida.vencedor() == "empate"){
            this.empates = this.empates + 1
        }
        else{
            this.derrotas = this.derrotas + 1
        }
    }
    get exibirSituacao(){
        console.log(`O time ${this.nome}, sigla ${this.sigla}, possui um total de ${this.vitorias} vitorias, ${this.derrotas} derrotas e ${this.empates} empates. Com um total de ${this.nPontos} pontos em ${this.nJogos} jogos.`)
    }
}

class Partida{
    constructor(sigla1, gols1, sigla2, gols2){
        this.sigla1 = sigla1
        this.sigla2 = sigla2
        this.gols1 = gols1
        this.gols2 = gols2
    }
    vencedor(){
        if(this.gols1 > this.gols2){
            return this.sigla1
        }
        else if(this.gols1 < this.gols2){
            return this.sigla2
        }
        else if(this.gols1 == this.gols2){
            return "empate"
        }
    }
}

const palmeiras = new Time("Palmeiras", "PA", 0, 0, 0)
const santos = new Time("Santos", "SA", 0, 0, 0)

const partida1 = new Partida("PA", 3, "SA", 2)
const partida2 = new Partida("PA", 0, "SA", 1)
const partida3 = new Partida("PA", 2, "SA", 2)


palmeiras.conmputarPartida(partida1)
palmeiras.conmputarPartida(partida2)
palmeiras.conmputarPartida(partida3)
console.log(palmeiras.exibirSituacao)