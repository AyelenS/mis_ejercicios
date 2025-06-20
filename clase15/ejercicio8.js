// Extrae y muestra de la frase "los gatos son geniales" solo la parte "gatos " utilizando el metodo adecuado

const prompt = require('prompt-sync')();

const frase = "los gatos son geniales";
const palabra = frase.slice(4, 9); 

console.log(palabra); 
