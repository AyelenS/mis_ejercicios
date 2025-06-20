// Cambia la palabra "invierno" por "verano" y muestra la frase actualizada.(frase: "Me gusta el invierno")

const prompt = require('prompt-sync')();

let frase = "Me gusta el invierno";
frase = frase.replace("invierno", "verano");
console.log(frase); 
