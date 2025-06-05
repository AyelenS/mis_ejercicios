// Declarar dos variables booleanas condicion1 y condicion2.
// Pedir al usuario que ingrese dos valores booleanos (true o false) 
// Mostrar el resultado de diversas combinaciones lógicas.

const prompt = require("prompt-sync")({ sigint: true });

let input1=prompt("Ingrese el primer valor booleano (true/false): "). toLowerCase();
let input2=prompt("Ingrese el segundo valor booleano (true/false): "). toLowerCase();

let condicion1 = (input1 === "true");
let condicion2 = (input2 === "true"); 

console.log(typeof(condicion1));
console.log("\na Resultados lógicos:");
console.log("condicion1 AND condicion2: ", condicion1 && condicion2);
console.log("condicion1 OR condicion2: ", condicion1 || condicion2);
console.log("NOT condicion1: ", !condicion1);
console.log("NOT condicion2: ", !condicion2);