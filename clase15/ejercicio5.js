// Lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. 
// Encuentra y muestra el índice del color "Azul" en la lista.

const prompt = require("prompt-sync")({ sigint: true });

const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
const indiceAzul = colores.indexOf("Azul");
if (indiceAzul !== -1) {
    console.log(`El índice del color "Azul" es: ${indiceAzul}`);
}
else {
    console.log('El color "Azul" no se encuentra en la lista.');
}
