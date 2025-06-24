/* Recorrer la lista y mostrar el nombre de cada fruta en la consola, una por una, ['manzana', 'banana', 'cereza']. */

const prompt = require('prompt-sync')();

const frutas = ['manzana', 'banana', 'cereza'];
frutas.forEach(fruta => {
    console.log("Fruta:", fruta);
});
console.log("Lista de frutas:", frutas);

