/* Buscar la posición de un número en un array partiendo de esta lista: [12,3,5,7,1,22,47,100,] 
Ordenar la lista de menor a mayor utilizando bubble sort 
Responder las siguientes preguntas:
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100? */ 

const prompt = require("prompt-sync")({ sigint: true });

let list = [12, 3, 5, 7, 1, 22, 47, 100];
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            }
        }
    }
    return arr;
}
function buscarNumero(array, numero) {
    return array.indexOf(numero);
}
console.log("Lista original:", list);
const listaOrdenada = bubbleSort(list);
console.log("Lista ordenada:", listaOrdenada);
const numerosABuscar = [12, 5, 22, 100];    
numerosABuscar.forEach(numero => {
    const posicion = buscarNumero(listaOrdenada, numero);
    if (posicion !== -1) {
        console.log(`El número ${numero} se encuentra en la posición: ${posicion}`);
    } else {
        console.log(`El número ${numero} no se encuentra en la lista.`);
    }
});




