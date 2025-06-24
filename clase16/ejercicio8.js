/* Buscar un nombre especifico (Laura) en una lista de nombres
Lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana'].*/

const prompt = require('prompt-sync')();

const nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
const nombreBuscado = 'Laura';
const encontrado = nombres.includes(nombreBuscado);
if (encontrado) {
    console.log(`El nombre ${nombreBuscado} se encuentra en la lista.`);
}   
else {
    console.log(`El nombre ${nombreBuscado} no se encuentra en la lista.`);
}
console.log("Lista de nombres:", nombres);



