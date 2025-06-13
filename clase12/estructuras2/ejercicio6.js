/*Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.*/ 

const promt = require('prompt-sync')();

let matriz = [];
for (let i = 0; i < 3; i++) {
    let fila = [];
    for (let j = 0; j < 3; j++) {
        let numero = parseInt(promt(`Ingrese el número para la posición [${i}][${j}]: `));
        fila.push(numero);
    }
    matriz.push(fila);
}
let suma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let numero = matriz[i][j];
        if (numero >= 10 && numero < 1000) {
            suma += numero;
        }
    }
}
console.log(`La suma de los números mayores o iguales a 10 y menores que 1000 es: ${suma}`);
