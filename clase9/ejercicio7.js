// Pedir al usuario que ingrese su peso en kilogramos y conviértelo a libras.
// Mostrar el resultado con un mensaje 

const prompt = require('prompt-sync')();

let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos: "));
let pesoLibras = pesoKg * 2.20462; // 1 kilogramo = 2.20462 libras
console.log(`Su peso en libras es: ${pesoLibras.toFixed(2)} lbs`); 