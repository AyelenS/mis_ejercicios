// Declarar dos variables: una con el nombre edad y la otra con el nombre peso
// Asignarle un valor 

let edad = 32; 
let peso = 70; 

const prompt = require("prompt-sync")({ sigint: true });    
let nombre = prompt("Ingrese su nombre: "); 
console.log(`Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.`);


