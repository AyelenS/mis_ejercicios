// Pedir al usuario que ingrese un numero
// Verificar si el numero es positivo, negativo o igual a cero
// Mostrar un mensaje indicando cual es el caso
// Utilizar una estructura de control de flujo (if, else if, else) para hacer las verificaciones
// Usar parseFloat() para convertir la entrada del usuario a un número.

const prompt = require("prompt-sync")({ sigint: true });
let = numero = prompt("Ingrese un numero");
if (numero > 0) {
    console.log("El numero " + numero + " es positivo ");
}else if (numero < 0) {
    console.log( "El numero" + numero + " es negativo");
} else if (numero == 0) {
    console.log("El numero"  + numero + "es igual a cero");
}