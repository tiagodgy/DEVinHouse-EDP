
for (let i=0; i<= 33; i++){
    if ((i%3 == 0) && (i%5 == 0) ){
        console.log(`${i}FizzBuzz`)
    }
    else if(i%3 == 0){
        console.log(`${i}Fizz`)
    }
    else if(i%5 ==0){
        console.log(`${i}Buzz`)
    }
}