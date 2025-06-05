// Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso
// Muestra un mensaje personalizado que incluya toda esta información.

const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let peso = prompt("Ingrese su peso: ");
console.log(`Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.`);
