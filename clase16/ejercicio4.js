/* Calcular el resultado de sumar [1,2,3,4] 
Imprimir el total en la consola */

const prompt = require('prompt-sync')();

const numeros = [1, 2, 3, 4];
const sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Lista original:", numeros);
console.log("Suma total:", sumaTotal);

