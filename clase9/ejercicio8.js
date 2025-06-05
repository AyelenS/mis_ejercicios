// Pedir al usuario que ingrese las longitudes de los tres lados de un triángulo
// Determina y muestra si el triángulo es equilátero, isósceles o escaleno

let prompt = require('prompt-sync')();
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo: "));
if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Los lados del triángulo deben ser números positivos.");
}
else if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
}

else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("El triángulo es isósceles.");
}
else {
    console.log("El triángulo es escaleno.");
}