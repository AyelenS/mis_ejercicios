/* Responder las siguientes preguntas utilizando el algoritmo de busqueda binaria:
¿Cuál es la posición del número 1?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 6?
¿Cuál es la posición del número 9?
¿Cuál es la posición del número 11? */ 

const prompt = require("prompt-sync")({ sigint: true });

function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        const medio = Math.floor((inicio + fin) / 2);
        if (array[medio] === objetivo) {
            return medio; 
        } else if (array[medio] < objetivo) {
            inicio = medio + 1; 
        } else {
            fin = medio - 1;
        }
    }
    return -1; 

}

console.log("Ingrese una lista de números separados por comas:");
const entrada = prompt();
const numeros = entrada.split(",").map(Number).sort((a, b) => a - b);
const numerosABuscar = [1, 5, 6, 9, 11];
numerosABuscar.forEach(numero => {
    const posicion = busquedaBinaria(numeros, numero);
    if (posicion !== -1) {
        console.log(`El número ${numero} se encuentra en la posición: ${posicion}`);
    } else {
        console.log(`El número ${numero} no se encuentra en la lista.`);
    }
});

