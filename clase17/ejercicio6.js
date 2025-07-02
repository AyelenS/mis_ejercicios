/* Escribir una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos:
1. Quitar los espacios en blanco alrededor de cada marca.
2. Verificar si existe la marca "Tesla".
3. Reemplazar todas las marcas "Ford" por "BMW".
4. Encontrar el índice de la marca "Chevrolet".
5. Devolver una cadena de marcas en orden alfabético separadas por puntos.
*/ 

const prompt = require("prompt-sync")({ sigint: true });

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan"; 

function gestionarAutos(listaMarcas) {
    const marcas = listaMarcas.split(",").map(marca => marca.trim());
    const existeTesla = marcas.includes("Tesla");
    const marcasActualizadas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);
    const indiceChevrolet = marcasActualizadas.indexOf("Chevrolet");
    const marcasOrdenadas = marcasActualizadas.sort().join(".");

    return {
        existeTesla,
        indiceChevrolet,
        marcasOrdenadas
    };
}
console.log("Ingrese una lista de marcas de autos separadas por comas:");
entrada = prompt();
const resultado = gestionarAutos(entrada);
console.log("¿Existe la marca 'Tesla'?:", resultado.existeTesla);
console.log("Índice de la marca 'Chevrolet':", resultado.indiceChevrolet);
console.log("Marcas en orden alfabético separadas por puntos:", resultado.marcasOrdenadas);


