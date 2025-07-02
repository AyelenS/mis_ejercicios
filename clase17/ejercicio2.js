/* Pedir al usuario que ingrese una oracion
1 Escribir la función “procesarOracion” y quitar los espacios en blanco al inicio y al final 
2 Dividir la oracion en palabras
3 Reemplazar todas las vocales 'a' por '@'.
4 Encontrar la posición de la primera aparición de la palabra "javascript" (De no aparecer retornar -1)
5 Convertir la oración a una cadena de palabras separadas por guiones. */

const prompt = require("prompt-sync")({ sigint: true });

function procesarOracion(oracion) {
    
    const sinEspacios = oracion.trim();
    const palabras = sinEspacios.split(" ");
    const reemplazada = sinEspacios.replace(/a/g, '@');
    const posicion = sinEspacios.toLowerCase().indexOf("javascript");
    const conGuiones = palabras.join("-");
    
    return {
        sinEspacios,
        reemplazada,
        posicion,
        conGuiones
    };
}

console.log("Ingrese una oración:");
const oracion = prompt();
const resultado = procesarOracion(oracion);
console.log("Oración sin espacios:", resultado.sinEspacios);
console.log("Oración con 'a' reemplazada por '@':", resultado.reemplazada); 
console.log("Posición de 'javascript':", resultado.posicion);
console.log("Oración con guiones:", resultado.conGuiones);

