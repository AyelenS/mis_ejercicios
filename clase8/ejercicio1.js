// Solictar al usuario que ingrese un numero cualquiera
// Calcular el doble de ese numero
// Mostrar el resultado en la consola 

// Requisitos: utilizar la funcion prompt() para solicitar el dato al usuario
//             almacenar el numero ingresado en una variable
//             utilizar un operador aritmético para calcular el doble del número.  


const prompt = require("prompt-sync")({ sigint: true });
let = numero = prompt("Ingrese un numero");
if (isNaN(numero)) {
    console.log("El numero no es correcto");}
else {
    console.log("El doble de " + numero + " es " + (numero * 2) + ".");
}
