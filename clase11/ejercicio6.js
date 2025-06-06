// Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. 
// Usar ciclo for.

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Introduce un número: '));
if (isNaN(numero)) {
    console.log('Por favor, introduce un número válido.');
}
else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
