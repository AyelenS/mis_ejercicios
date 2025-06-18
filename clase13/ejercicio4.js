/* Crea una función declarada llamada "esPar" que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el numero es impar.
Usa una variable local para guardar el resultado.*/

const prompt = require('prompt-sync')();

function esPar(numero) {
    let resultado;
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }
    return resultado;
}

console.log("Ingrese un número:");
const numero = parseInt(prompt());
console.log(esPar(numero)); 