// Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde
// Imprimir un mensaje con la acción correspondiente: 
// Rojo: "Alto, no puedes avanzar"
// Amarillo: "Precaución, prepárate para avanzar."
// Verde: "Avanza con seguridad."
// Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
// Utiliza un switch para resolver el ejercicio.

const prompt = require("prompt-sync")({ sigint: true });

const color = prompt("Ingresa un color del semáforo (rojo, amarillo o verde):").toLowerCase();
switch (color) {
    case "rojo":
        console.log("Alto, no puedes avanzar.");
        break;
    case "amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;
    case "verde":
        console.log("Avanza con seguridad.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}   


