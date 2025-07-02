/* Pedir al usuario que ingrese una lista de nombres (Julian, Maria, Malena, Andrea, Pablo y Pedro) separados por comas 
Escribir la función “transformarYAnalizarNombres” y que la misma realice lo siguiente:
1 Quitar los espacios en blanco alrededor de cada nombre.
2 Verificar si existe el nombre "Juan".
3 Reemplazar todos los nombres "María" por "Ana".
4 Encontrar el índice del nombre "Pedro". 
5 Devolver una cadena de nombres en orden alfabético separados por puntos. 
*/

const prompt = require("prompt-sync")({ sigint: true });
function transformarYAnalizarNombres(listaNombres) {
    
    const nombres = listaNombres.split(",").map(nombre => nombre.trim());
    const existeJuan = nombres.includes("Juan");
    const nombresActualizados = nombres.map(nombre => nombre === "María" ? "Ana" : nombre);
    const indicePedro = nombresActualizados.indexOf("Pedro");
    const nombresOrdenados = nombresActualizados.sort().join(".");
    
    return {
        existeJuan,
        indicePedro,
        nombresOrdenados
    };
}

console.log("Ingrese una lista de nombres separados por comas:");
const listaNombres = prompt();
const resultado = transformarYAnalizarNombres(listaNombres);
console.log("¿Existe el nombre 'Juan'?:", resultado.existeJuan);
console.log("Índice del nombre 'Pedro':", resultado.indicePedro);
console.log("Nombres en orden alfabético separados por puntos:", resultado.nombresOrdenados);


