// Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA (asignales los valores numericos 18 y 99 respectivamente).
// Pide al usuario que ingrese su edad.
// Usa “parseInt” para convertir la entrada del usuario a un número entero.
// Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.

const prompt = require("prompt-sync")({ sigint: true });

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad < EDAD_MINIMA) {
    console.log(`La edad ${edad} es menor que la edad mínima permitida (${EDAD_MINIMA}).`);
}
else if (edad > EDAD_MAXIMA) {
    console.log(`La edad ${edad} es mayor que la edad máxima permitida (${EDAD_MAXIMA}).`);
} else {
    console.log(`La edad ${edad} está dentro del rango permitido (${EDAD_MINIMA}-${EDAD_MAXIMA}).`);
}