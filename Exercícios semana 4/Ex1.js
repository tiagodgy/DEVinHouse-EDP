arr = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]


let maior = arr[0]
let menor = arr[0]

function menorMaior(){
    for(let i=0; i < arr.length; i++){
        if(maior <= arr[i]){
            maior = arr[i]
        }
        else if(menor >= arr[i]){
            menor = arr[i]
        }
    }

    if( maior && menor){
        console.log(`O maior número é ${maior} e o menor é ${menor}`)
    }
    else{
        console.log("Não foi possível calcular")
    }
}

menorMaior()
