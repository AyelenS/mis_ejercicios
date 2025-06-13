/* Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos.
 Luego, escribe un algoritmo para sumar todos los números en la matriz. */

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
let suma = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        suma += matriz[i][j];
    }
}
console.log("La suma de todos los números en la matriz es: " + suma);

