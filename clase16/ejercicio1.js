/* Crear una nueva lista donde cada número de la lista original se haya transformado en su cuadrado
Lista de numeros: [2,4,6,8] */

const prompt = require('prompt-sync')();

const numeros = [2, 4, 6, 8];
const cuadrados = numeros.map(num => num * num);
console.log("Lista original:", numeros);
console.log("Lista de cuadrados:", cuadrados);

