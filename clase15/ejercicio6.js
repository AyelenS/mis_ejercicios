// Lista de números [2, 5, 7, 2, 8, 7]. 
// Encuentra y muestra la última posición en la que aparece el número 7.

const prompt = require("prompt-sync")({ sigint: true });
const numeros = [2, 5, 7, 2, 8, 7];
const ultimaPosicionSiete = numeros.lastIndexOf(7); 
if (ultimaPosicionSiete !== -1) {
    console.log(`La última posición del número 7 es: ${ultimaPosicionSiete}`);
}
else {
    console.log('El número 7 no se encuentra en la lista.');
}

