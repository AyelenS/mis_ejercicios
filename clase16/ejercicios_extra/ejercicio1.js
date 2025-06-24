/* Encuentra los nombres más cortos y transforma su formato, lista de nombres: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']
Filtra los nombres que tengan menos de 5 letras
Transforma los nombres resultantes para que estén en mayúsculas.
Construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.*/

const prompt = require('prompt-sync')();

const nombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];
const nombresCortos = nombres.filter(nombre => nombre.length < 5);
const nombresMayusculas = nombresCortos.map(nombre => nombre.toUpperCase());
const frase = `Los nombres seleccionados son: ${nombresMayusculas.join(', ')}`; 
console.log(frase);

