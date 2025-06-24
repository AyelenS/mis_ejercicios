/* Encontrar el primer numero de la lista mayor a 10
Lista de numeros: [5,8,12,20,3]*/

const prompt = require('prompt-sync')();

const numeros = [5, 8, 12, 20, 3];
const primerMayorA10 = numeros.find(num => num > 10);
console.log("Lista original:", numeros);
console.log("Primer número mayor a 10:", primerMayorA10);



