/* Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.*/

const prompt = require('prompt-sync')();

const convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log("Ingrese la temperatura en grados Celsius:");
const celsius = parseFloat(prompt());
console.log(`La temperatura en Fahrenheit es: ${convertirCelsiusAFahrenheit(celsius)}`);

