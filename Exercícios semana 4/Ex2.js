const palavra = "osso"

function reverse(palavra){
    return palavra.split("").reverse().join("");
}

const palavraReversa = reverse(palavra)

console.log(palavraReversa)

if( palavra == palavraReversa){
    console.log("A palavra é uma palindrome")
}