// Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo.
// Imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

let suma = 0;
let numero;
do {
  numero = parseFloat(prompt('Ingrese un número (negativo para salir): '));
  if (numero >= 0) {
    suma += numero;
  }
}while (numero >= 0);

console.log(`La suma de los números ingresados es: ${suma}`);

