/* Separar y guardar únicamente los números pares en una nueva lista
Lista de numeros:[1,2,3,4,5,6] */

const prompt = require('prompt-sync')();

const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(num => num % 2 === 0);
console.log("Lista original:", numeros);
console.log("Lista de números pares:", pares);

