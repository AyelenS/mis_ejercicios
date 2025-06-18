/*Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.*/

const prompt = require('prompt-sync')();

function convertirHorasAMinutos(horas) {
    return horas * 60;
}

console.log("Ingrese el número de horas:");
const horas = parseFloat(prompt());
console.log("El total en minutos es:", convertirHorasAMinutos(horas));

