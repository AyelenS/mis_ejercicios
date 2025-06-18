/* Crea una función expresada llamada concatenarNombres que reciba 
dos nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.*/

const prompt = require('prompt-sync')();

const concatenarNombres = function(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
console.log("Ingrese su nombre:");
const nombre = prompt();    
console.log("Ingrese su apellido:");
const apellido = prompt();
console.log("El nombre completo es:", concatenarNombres(nombre, apellido));

