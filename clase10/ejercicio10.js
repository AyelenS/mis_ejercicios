// Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
// Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    }); 
readline.question('Introduce el precio original del producto: ', (precioOriginal) => {
    readline.question('Introduce el porcentaje de descuento: ', (porcentajeDescuento) => {
        const precio = parseFloat(precioOriginal);
        const descuento = parseFloat(porcentajeDescuento);
        const precioFinal = precio - (precio * (descuento / 100));
        console.log(`El precio final del producto es: ${precioFinal.toFixed(2)}€`);
        readline.close();
    });
});

