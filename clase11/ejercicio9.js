// Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. 
// El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. 
// Usa un ciclo for para realizar la cuenta regresiva.

const prompt = require('prompt-sync')();

console.log("Cuenta regresiva para el lanzamiento del cohete:");
for (let i = 10; i >= 0; i--) {
    console.log(i);
    if (i === 0) {
        console.log("¡Despegue!");
    }
}
