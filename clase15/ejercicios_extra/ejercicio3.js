// Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno
// Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
// Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
// Al final, muestra cuántos clientes fueron atendidos en total.
// (Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"]).

const prompt = require('prompt-sync')();

let colaClientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let totalAtendidos = 0;
while (colaClientes.length > 0) {
    let cliente = colaClientes.shift(); 
    totalAtendidos++;

    if (cliente === "VIP") {
        console.log(`Atendiendo a ${cliente} con prioridad especial.`);
    } else {
        console.log(`Atendiendo a ${cliente}.`);
    }
}
console.log(`Total de clientes atendidos: ${totalAtendidos}.`);

