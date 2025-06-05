// Definir una constante PI con el valor de pi (3.14159)
// Pedir al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.

const PI = 3.14159;
const prompt = require("prompt-sync")({ sigint: true });
let radio = parseFloat(prompt("Ingrese el radio del círculo: "));
let area = PI * radio * radio;  
let perimetro = 2 * PI * radio;
console.log("El área del círculo es: " + area.toFixed(2));
console.log("El perímetro del círculo es: " + perimetro.toFixed(2));    

