/* A partir del array de frases ("El clima es MALO hoy", "Este libro es muy MALO", "El servicio aqui es MALO" ) 
escribir la función “procesarFrases” que realice las siguientes tareas:
1 Convertir cada frase a minúsculas.
2 Dividir cada frase en palabras.
3 Reemplazar las palabras "malo" por "bueno".
4 Combinar las palabras de cada frase en una nueva cadena separada por espacios.
5 Devolver un nuevo array con las frases modificadas. */

const prompt = require("prompt-sync")({ sigint: true });

const frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aqui es MALO"
];
 
function procesarFrases(frases) {
    return frases.map(frase => {
        const minusculas = frase.toLowerCase();
        const palabras = minusculas.split(" ");
        const reemplazadas = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);
        return reemplazadas.join(" ");
    });
}

console.log("Frases originales:", frases);
const resultado = procesarFrases(frases);
console.log("Frases procesadas:", resultado);



