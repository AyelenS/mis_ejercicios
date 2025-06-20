// Dividir la oración en palabras individuales.
// Clasificar las palabras en dos categorías: Cortas (menos de 5 letras), Largas (5 letras o más)
// Mostrar ambas listas de palabras clasificadas.
// (La oración es: "JavaScript es un lenguaje poderoso y versátil").

const prompt = require('prompt-sync')();

let oracion = "JavaScript es un lenguaje poderoso y versátil";
let palabras = oracion.split(" ");
let cortas = [];
let largas = [];
for (let palabra of palabras) {
    if (palabra.length < 5) {
        cortas.push(palabra);
    } else {
        largas.push(palabra);
    }
}

console.log("Palabras cortas: " + cortas.join(", "));
console.log("Palabras largas: " + largas.join(", "));

