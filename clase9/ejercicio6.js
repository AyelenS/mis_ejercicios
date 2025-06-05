// Pedir al usuario que ingrese su edad
// Verificar si es mayor o menor de edad
// Mostrar un mensaje personalizado según el caso.

const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));
if (edad >= 18) {
console.log("Eres mayor de edad.");
}
else if (edad < 18) {  
    console.log("Eres menor de edad.");
}