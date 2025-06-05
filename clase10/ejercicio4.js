// Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
// Declara una variable llamada texto y asígnale un string de tu elección
// Declara una variable llamada numero y asígnale un dato numérico
// Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript

// Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
// Concatena el “string” de la variable texto con otro mensaje adicional.
// Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
// Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.

let verdadero = true;
let texto = "Hola, este es un mensaje";     
let numero = 42;
let nada = null;    
let resultadoOperacion = numero + 10; 
let mensajeConcatenado = texto + " - Mensaje adicional"; 
console.log(`Resultado de la operación matemática: ${resultadoOperacion}`); 
console.log(`Mensaje concatenado: ${mensajeConcatenado}`); 
if (verdadero) {
    console.log("La variable 'verdadero' es true");
}
else {
    console.log("La variable 'verdadero' es false");
}
if (nada === null) {
    console.log("La variable 'nada' es null");
}

