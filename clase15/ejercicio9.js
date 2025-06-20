// Elimina los espacios al inicio y al final y muestra la cadena resultante de la siguiente cadena con espacios adicionales
// "   Hola, mundo!   "

const prompt = require('prompt-sync')();

const fraseConEspacios = "   Hola, mundo!   ";
const fraseSinEspacios = fraseConEspacios.trim(); 

console.log(`La cadena sin espacios al inicio y al final es: "${fraseSinEspacios}"`);

