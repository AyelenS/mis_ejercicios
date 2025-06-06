// Escribe un programa que le pida al usuario un número cualquiera
// El programa deberá analizar si el número ingresado es positivo, negativo o cero.
// Utiliza if para resolverlo y muestra un mensaje explicativo en cada caso.

const prompt = require("prompt-sync")({ sigint: true });

const numero = parseFloat(prompt("Ingresa un número:"));    
if (numero > 0) {
    console.log("El número es positivo.");
}
else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}




