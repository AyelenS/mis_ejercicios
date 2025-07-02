/* Crea un objeto que represente un estudiante, debe tener nombre, edad y un array de notas (con 5 notas).
 Escribe la función "procesarEstudiante" que tendra como objetivo: 
 1 Agregar una nueva nota al array de notas.
 2 Eliminar la primera nota del array.
 3 Calcular el promedio de las notas restantes.
 4 Convertir el nombre del estudiante a mayúsculas
 5 Devolver un objeto con el nombre en mayúsculas y el promedio de las notas.

*/


const prompt = require("prompt-sync")({ sigint: true });  

const estudiante = {
    nombre: prompt("Ingrese el nombre del estudiante: "),
    edad: parseInt(prompt("Ingrese la edad del estudiante: ")),
    notas: []
    };  

function procesarEstudiante(estudiante, nuevaNota) {
    estudiante.notas.push(nuevaNota);
    const sumaNotas = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    const nombreMayusculas = estudiante.nombre.toUpperCase();
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    };
}

console.log("Ingrese 5 notas del estudiante (separadas por comas):");
const notasEntrada = prompt();
const notasArray = notasEntrada.split(",").map(nota => parseFloat(nota.trim()));
for (let nota of notasArray) {
    const resultado = procesarEstudiante(estudiante, nota);
    console.log(`Nombre del estudiante en mayúsculas: ${resultado.nombre}`);
    console.log(`Promedio de las notas: ${resultado.promedio}`);
}



