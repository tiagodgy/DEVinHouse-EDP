const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayQuadrados = []
let arrayFiltrados = []

arrayQuadrados = arrayNumeros.map((num) =>{ return num**2})
console.log(arrayQuadrados)

arrayFiltrados = arrayQuadrados.filter((num) => { return num >30})
console.log(arrayFiltrados)