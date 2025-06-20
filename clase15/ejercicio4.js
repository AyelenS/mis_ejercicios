//Unir todas las palabras en una sola frase, separadas por un espacio, y mostra el resultado (array de palabras ["JavaScript", "es", "divertido"]).

const prompt = require("prompt-sync")({ sigint: true });

const palabras = ["JavaScript", "es", "divertido"];
const frase = palabras.join(" ");
console.log(frase); 
