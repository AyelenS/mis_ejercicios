// Declarar dos variables numéricas numero1 y numero2.
// Pedir al usuario que ingrese dos números y mostrar cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
if (numero1 === numero2) {
    console.log("El numero " + numero1 + " es igual que " + numero2);

} else if (numero1 > numero2) {
    console.log( "El numero " + numero1 + " es mayor que " + numero2);
} else {
    console.log("El numero " + numero1 + " es menor que " + numero2);
}


