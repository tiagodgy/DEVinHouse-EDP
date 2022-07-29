export function soma(...dados){
    let soma = dados.reduce((acc, item)=>acc +item, 0)
    console.log(soma)
}
