// Fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"], (el hamster debe ser atendido primero)
// Agrear el hamster al incio de la lista
// Atender a la primer mascota de la lista y mostrarla por consola
// Mostrar lista actualizada

const prompt= require("prompt-sync")({ sigint: true });

const mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hamster");  
console.log("Atendiendo a:", mascotas[0]); 
mascotas.shift(); 
console.log("Lista actualizada:", mascotas); 

