// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.
// Pide al usuario que adivine el número hasta 3 intentos
// Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes.
// Si no acierta después de los 3 intentos, muestra el número secreto. 
// Usa for para resolver el ejercicio.

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
let acierto = false;
for (let i = 1; i <= 3; i++) {
    const intento = parseInt(prompt(`Intento ${i}: Adivina el número entre 1 y 10: `));
    
    if (isNaN(intento) || intento < 1 || intento > 10) {
        console.log("Por favor, introduce un número válido entre 1 y 10.");
        continue;
    }
    
    if (intento === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número secreto.");
        acierto = true;
        break;
    } else {
        console.log("No has acertado. Inténtalo de nuevo.");
    }
}
if (!acierto) {
    console.log(`Lo siento, no has adivinado el número secreto. Era: ${numeroSecreto}`);
}
