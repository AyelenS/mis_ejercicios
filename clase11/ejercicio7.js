// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división
// Según la operación ingresada, el programa deberá calcular y mostrar el resultado
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error
// Usar switch para resolverlo

const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Introduce el primer número: '));
const num2 = parseFloat(prompt('Introduce el segundo número: '));
const operacion = prompt('Introduce la operación (suma, resta, multiplicacion, division): ').toLowerCase();
switch (operacion) {
    case 'suma':
        console.log(`El resultado de la suma es: ${num1 + num2}`);
        break;
    case 'resta':
        console.log(`El resultado de la resta es: ${num1 - num2}`);
        break;
    case 'multiplicación':
        console.log(`El resultado de la multiplicacion es: ${num1 * num2}`);
        break;
    case 'division':
        if (num2 !== 0) {
            console.log(`El resultado de la division es: ${num1 / num2}`);
        } else {
            console.log('Error: No se puede dividir por cero.');
        }
        break;
    default:
        console.log('Operación inválida. Por favor, ingresa una operación válida (suma, resta, multiplicacion, division).');
}


