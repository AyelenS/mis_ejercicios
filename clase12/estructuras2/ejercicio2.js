// Escribe un programa que solicite al usuario ingresar una contraseña
// Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. (contraseña correcta: "1234")

const prompt = require('prompt-sync')();

let contrasena;
do {
  contrasena = prompt('Ingrese la contraseña: ');
  if (contrasena !== '1234') {
    console.log('Contraseña incorrecta, intente de nuevo.');
  }
}while (contrasena !== '1234');

console.log('Contraseña correcta, acceso concedido.');

