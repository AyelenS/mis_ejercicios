/* Construir una frase completa concatenando cada palabra en orden, separadas por espacios.
Lista de palabras: ['Me', 'gusta', 'aprender', 'JavaScript'] */

const prompt = require('prompt-sync')();

const palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];
const fraseCompleta = palabras.join(' ');
console.log("Lista de palabras:", palabras);
console.log("Frase completa:", fraseCompleta);
