/* Transformar las palabras ['hola', 'mundo', 'javascript'] para que tengan un prefijo y un sufijo 
Ej: convertir la palabra "hola" en "¡hola!".*/

const prompt = require('prompt-sync')();

const palabras = ['hola', 'mundo', 'javascript'];
const prefijo = '¡';    
const sufijo = '!';
const palabrasTransformadas = palabras.map(palabra => `${prefijo}${palabra}${sufijo}`);
console.log("Lista original:", palabras);
console.log("Lista de palabras transformadas:", palabrasTransformadas);




