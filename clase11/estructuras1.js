// condicion ? valorSiVerdadero : valorSiFalso;

// let hambre = prompt("¿Tienes hambre? (si/no)");

// let hambre = true; // Simulando que sí tengo hambre

// let accionar = hambre ? " como pizza " : " no como nada ";

// console.log(accionar); 
// console.log(hambre);    

// const prompt = require("prompt-sync")();
// // Ejemplo de uso de prompt-sync para simular la entrada del usuario
// let pedido = prompt("Que queres comer? "). toLowerCase();

//switch (pedido) {
//    case "pizza":
//        console.log("¡Elegiste pizza.");
//        break; 
//    case "ensalada":
//        console.log("¡Elegiste ensalada!");
//        break; 
//        default:
//        }


// if (condicion) {
//     console.log("La condición es verdadera");
// }
// if (condicion) {
    
// } 

// switch (condicion) {
//     case "valorEspecifico":
// }
        

const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let acierto = false;

for (let intento = 1; intento <=3; intento++) {
  const adivinanza = parseInt(prompt(`Intento ${intento}: Adivina el número del 1 al 10`))

  // Estructura switch para evaluar la entrada del usuario
  switch (true) {
    case adivinanza === numeroSecreto:
      console.log(`🎉 ¡Felicitaciones! Adivinaste el número en el intento ${intento}`);
      acierto = true;
      break;
    case adivinanza < numeroSecreto:
      console.log("📉 Muy bajo... ¡intenta un número más alto!");
      break;
    case adivinanza > numeroSecreto:
      console.log("📈 Muy alto... ¡intenta un número más bajo!");
      break; 
  }
  
  // Operador ternario para cortar el bucle si acertó
  if (acierto ? true : false) break;
}
if (!acierto) {
    console.log(`😢 Lo siento... el número secreto era ${numeroSecreto}`); 
}

