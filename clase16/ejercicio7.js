/* Filtrar los nombres que empiezan con "A"
Lista de nombres: ['Ana', 'Luis', 'Andrea', 'María'], */

const prompt = require('prompt-sync')();

const nombres = ['Ana', 'Luis', 'Andrea', 'María'];
const nombresConA = nombres.filter(nombre => nombre.startsWith('A'));
console.log("Lista original:", nombres);
console.log("Nombres que empiezan con 'A':", nombresConA);


