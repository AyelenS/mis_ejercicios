/* Cuenta la cantidad total de letras en una lista de palabras,  ['sol', 'luna', 'estrella'].*/

const prompt = require('prompt-sync')();

const palabras = ['sol', 'luna', 'estrella'];
const totalLetras = palabras.reduce((acumulador, palabra) => acumulador + palabra.length, 0);
console.log("Lista de palabras:", palabras);
console.log("Cantidad total de letras:", totalLetras);

