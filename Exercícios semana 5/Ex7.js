function euNaoEspero(){
    aguarda3Segundos()
    console.log("Eu não espero")
}

async function aguarda3Segundos() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log('Função diz: Terminei!');
}

async function euEspero(){
    await aguarda3Segundos()
    console.log("Eu esperei")
}

euEspero()