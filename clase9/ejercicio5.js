// Escribir un programa que pida al usuario que ingrese tres números
// Determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingrese el primer número: "));    
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));

if (num1 >= num2 && num1 >= num3) {
    console.log("el numero " + num1 + " es el mayor de los tres."); 
}
