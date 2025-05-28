// Solicitar al usuario que ingrese un número entero.
// Determinar si el número es par o impar
// Muestrar un mensaje indicando si el número es par o impar.

// Requisito: Utilizar el operador módulo (%) para comprobar si el número es divisible por 2.
//            Usa una estructura if-else para mostrar el mensaje adecuado.

const prom = require ("prompt-sync")();
let numero = parseInt(prom("Ingrese un numero entero: "));
if (numero % 2 === 0) {
    console.log("El numero " + numero + "es par");
} else { 
    console.log("El numero " + numero + " es impar");
}