/* Seleccionar los productos cuyo precio sea mayor o igual a 50.
Obtener solo los nombres de esos productos.
Calcular el precio total sumando los precios de los productos seleccionados.
Imprimir el total y los nombres de los productos seleccionados

Lista de productos con sus precios y formato de objetos:

const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
]; */

const prompt = require('prompt-sync')();

const products = [
  { name: 'Laptop', price: 1000 },  
  { name: 'Mouse', price: 25 },
  { name: 'Teclado', price: 50 },
  { name: 'Monitor', price: 200 },
  { name: 'Audífonos', price: 75 }
];
const productosSeleccionados = products.filter(product => product.price >= 50);
const nombresProductos = productosSeleccionados.map(product => product.name);   
const totalPrecio = productosSeleccionados.reduce((acumulador, product) => acumulador + product.price, 0);
console.log("Productos seleccionados:", nombresProductos.join(', '));
console.log("Precio total:", totalPrecio);

