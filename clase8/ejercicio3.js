// Pedir al usuario que ingrese dos números.
// Sumar ambos números.
// Muestre el resultado de la suma

// Requisitos: Utilizar prompt() para recibir los números.
//             Utilizar parseFloat() para convertir las entradas a números.
//             Almacenar los resultados en variables adecuadas y muestra el resultado.

const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt( "ingrese el primer numero"));
let numero2 = parseFloat(prompt( "ingrese el segundo numero")); 
let resultado = numero1 + numero2;
console.log("la suma de " + numero1 + " y el numero " + numero2 + " es igual a " + resultado );

