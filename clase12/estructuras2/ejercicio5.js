/* Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array */

const prompt = require('prompt-sync')();

let nombres = [];
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombres.push(nombre);
}
let nombreBuscado = prompt('Ingrese un nombre para buscar: ');
if (nombres.includes(nombreBuscado)) {
    console.log(`El nombre "${nombreBuscado}" se encuentra en el array.`);
}else {
    console.log(`El nombre "${nombreBuscado}" no se encuentra en el array.`);
}



