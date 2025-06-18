/* Declara una variable global llamada horaActual
Crea una función declarada llamada mostrarSaludo que imprima
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.*/

const prompt = require('prompt-sync')();

let horaActual = new Date().getHours();
function mostrarSaludo() {
    if (horaActual < 12) {
        console.log("Buenos días");
    } else if (horaActual < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
}
console.log("La hora actual es:", horaActual);
mostrarSaludo();

