/* Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla

1.	Crear un array para almacenar las notas.
2.	Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
3.	Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
4.	Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
5.	Imprime en consola las notas ingresadas usando el array notas */

const prompts = require('prompt-sync')();

const cantidadEstudiantes = parseInt(prompts('Ingrese la cantidad de estudiantes: '));
const notas = new Array(cantidadEstudiantes);
for (let i = 0; i < cantidadEstudiantes; i++) {
  notas[i] = parseFloat(prompts(`Ingrese la nota del estudiante ${i + 1}: `));
}
console.log('Notas ingresadas:');
for (let i = 0; i < cantidadEstudiantes; i++) {
  console.log(`Estudiante ${i + 1}: ${notas[i]}`);
}

