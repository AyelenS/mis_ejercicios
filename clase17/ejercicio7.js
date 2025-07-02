/* Escribir una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores:
1 Quitar los espacios en blanco alrededor de cada flor.
2 Verificar si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
3 Reemplazar todas las flores "Orquídea" por "Clavel".
4 Encontrar el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
5 Devolver una cadena de flores en orden alfabético separadas por puntos. */ 

const prompt = require("prompt-sync")({ sigint: true });

let entrada = "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria(listaFlores) {
    const flores = listaFlores.split(",").map(flor => flor.trim());
    
    if (flores.includes("Margarita")) {
        flores.push("Azucena");
    }
    const floresActualizadas = flores.map(flor => flor === "Orquídea" ? "Clavel" : flor);
    let indiceGirasol = floresActualizadas.indexOf("Girasol");
    if (indiceGirasol === -1) {
        floresActualizadas.unshift("Girasol"); 
    }
    const floresOrdenadas = floresActualizadas.sort().join(".");
    
    return floresOrdenadas;
}

console.log("Ingrese una lista de nombres de flores separados por comas:");
entrada = prompt();
const resultado = gestionarFloreria(entrada);
console.log("Flores en orden alfabético separadas por puntos:", resultado);


//Revisar ejercicio

