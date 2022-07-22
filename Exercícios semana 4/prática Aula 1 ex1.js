const arr=[1,2,3,4,5,6,7,8,9]
const par=[]
const impar=[]

function conta(){
    arr.forEach(element => {
        if ((element%2) == 0){
            par.push(element**2)
        }
        else{
            impar.push(element**3)
        }
    });
}

conta()
console.log(`Resultados pares foram ${par} e impares ${impar}`)

