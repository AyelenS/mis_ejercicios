// Inventario inicial de productos: "Laptop", "Teclado", "Mouse", "Monitor"
// Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
// Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
// Eliminar el primer producto del inventario.
// Mostrar la lista actualizada de productos en una sola cadena, separados por comas.¨

const prompt = require('prompt-sync')();

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
inventario.push("Impresora");

if (inventario.includes("Tablet")) {
    console.log("Tablet está en el inventario.");
} else {
    console.log("Tablet no está en el inventario.");
}

inventario.shift();

console.log("Inventario actualizado: " + inventario.join(", "));
