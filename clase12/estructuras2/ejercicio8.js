/* Generar dos funciones: Una va a sumar los valores en la diagonal marcada en rojo,
la otra va a marcar los valores de la diagonal marcada en verde
Ambas funciones deben devolver un resultado único. rojo: 505, verde: 505 */

const prompt = require('prompt-sync')();

let matriz = [];
for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10); 
    }
}
console.log("Matriz:");
for (let i = 0; i < 5; i++) {
    console.log(matriz[i]);
}

function sumaDiagonalRoja(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i]; // Suma los elementos de la diagonal principal
    }
    return suma;
}
function sumaDiagonalVerde(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][matriz.length - 1 - i]; // Suma los elementos de la diagonal secundaria
    }
    return suma;
}

let sumaRoja = sumaDiagonalRoja(matriz);
let sumaVerde = sumaDiagonalVerde(matriz);
console.log("La suma de la diagonal roja es: " + sumaRoja);
console.log("La suma de la diagonal verde es: " + sumaVerde);
if (sumaRoja === sumaVerde) {
    console.log("Las sumas de las diagonales son iguales.");
}
else {
    console.log("Las sumas de las diagonales son diferentes.");
}

