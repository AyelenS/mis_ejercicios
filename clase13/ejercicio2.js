/* Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.*/

const prompt = require('prompt-sync')();

const encontrarMayor = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}; 

console.log("Ingrese el primer número:");
const numero1 = parseFloat(prompt());
console.log("Ingrese el segundo número:");
const numero2 = parseFloat(prompt());
console.log("El número mayor es:", encontrarMayor(numero1, numero2));




