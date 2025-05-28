// Definir dos constantes RANGO_MINIMO y RANGO_MAXIMO con valores numericos de tu eleccion
// Pedir al usuario que ingrese un numero y verificar si esta definido dentro de las constantes
// Entrada (un numero ingresado por el usuario)
// Salida (identificar si su numero esta dentro del rango o no lo esta)

const prompt = require("prompt-sync")({ sigint: true });

const rango_maximo = 30 
const rango_minimo = 10

let numero = parseFloat(prompt(`ingrese un numero `));
if (numero < 10) {console.log(`el numero ${numero} no esta dentro del rango`)}

else if (numero > 30) {console.log(`el numero ${numero} no esta dentro del rango`)}

else {console.log( ` el numero ${numero} si esta dentro del rango` )}

