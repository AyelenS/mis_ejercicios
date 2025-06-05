// Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

readline.question('Ingrese la temperatura en grados Celsius: ', (celsius) => {
    const celsiusNumber = parseFloat(celsius);
    if (isNaN(celsiusNumber)) {
        console.log('Por favor, ingrese un número válido.');
    } else {
        const fahrenheit = (celsiusNumber * 9/5) + 32;
        console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);
    }
    readline.close();
});

