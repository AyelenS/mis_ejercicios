/* Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo.
 La función debe devolver el área del triángulo.*/

 const prompt = require('prompt-sync')();

 function calcularAreaTriangulo(base, altura) {
     return (base * altura) / 2;
 }  

    console.log("Ingrese la base del triángulo:");
    const base = parseFloat(prompt());
    console.log("Ingrese la altura del triángulo:");
    const altura = parseFloat(prompt());
    console.log("El área del triángulo es:", calcularAreaTriangulo(base, altura));



