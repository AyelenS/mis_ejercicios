/* Escribir la función ‘gestionarProductos’ y que la misma añada un nuevo producto al array, elimine el último producto del array
y encuentre el índice de un producto específico. */ 

const prompt = require("prompt-sync")({ sigint: true });

function gestionarProductos(productos, nuevoProducto, productoBuscado) {
    
    productos.push(nuevoProducto);
    productos.pop();
    const indice = productos.indexOf(productoBuscado);
    
    return {
        productos,
        indice
    };
}

console.log("Ingrese un producto para añadir:");
const nuevoProducto = prompt();
const productos = ["Manzana", "Banana", "Naranja"];
console.log("Lista de productos actual:", productos);
const productoBuscado = prompt("Ingrese el nombre del producto a buscar su índice: ");
const resultado = gestionarProductos(productos, nuevoProducto, productoBuscado);    
console.log("Lista de productos actualizada:", resultado.productos);
console.log(`Índice del producto "${productoBuscado}":`, resultado.indice);


// REVISAR EJERCICIO
