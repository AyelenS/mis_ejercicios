/* Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.*/

const prompt = require('prompt-sync')();

const calcularFactorial = function(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log("Ingrese un número para calcular su factorial:");
const numero = parseInt(prompt());
console.log("El factorial de", numero, "es:", calcularFactorial(numero));

