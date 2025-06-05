// Declarar una variable nombre y pedir al usuario que ingrese su nombre.  
// Verificar si el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre: ");
if (nombre === "Ayelen") { 
    console.log("¡Hola, " + nombre + "! Tu nombre es correcto.");
}