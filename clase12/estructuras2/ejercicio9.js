/* Realizar una aplicacion para control de gastos en donde el usuario ingrese sus gastos cotidianos
Registrar el total de los gastos, al finalizar la jornada, (considerar que todos los meses tienen cuatro semanas.)
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 
Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.*/

prompt = require('prompt-sync')();

let gastos = [];
for (let i = 0; i < 4; i++) {
    gastos[i] = [];
    for (let j = 0; j < 7; j++) {
        gastos[i][j] = parseFloat(prompt(`Ingrese el gasto del día ${j + 1} de la semana ${i + 1}: `));
    }
}
console.log("Matriz de gastos:");
for (let i = 0; i < 4; i++) {
    console.log(gastos[i]);
}
let totalGastos = 0;
let semanaMaxGastos = 0;
let maxGastos = 0;
for (let i = 0; i < 4; i++) {
    let sumaSemana = 0;
    for (let j = 0; j < 7; j++) {
        sumaSemana += gastos[i][j];
        totalGastos += gastos[i][j];
    }
    if (sumaSemana > maxGastos) {
        maxGastos = sumaSemana;
        semanaMaxGastos = i;
    }
}
console.log(`Total de gastos en el mes: $${totalGastos.toFixed(2)}`);
console.log(`La semana con más gastos es la semana ${semanaMaxGastos + 1} con un total de $${maxGastos.toFixed(2)}`);
let diaMaxGastos = 0;
let maxGastosDia = 0;
for (let j = 0; j < 7; j++) {
    let sumaDia = 0;
    for (let i = 0; i < 4; i++) {
        sumaDia += gastos[i][j];
    }
    if (sumaDia > maxGastosDia) {
        maxGastosDia = sumaDia;
        diaMaxGastos = j;
    }
}
console.log(`El día con más gastos es el día ${diaMaxGastos + 1} con un total de $${maxGastosDia.toFixed(2)}`);
