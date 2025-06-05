// Pedir al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente
// Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Ingrese un numero del 1 al 7: "));
if (numero < 1 || numero > 7) {
    console.log("Error: El numero debe estar entre 1 y 7.");
} else {    
    switch (numero) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
    }
}