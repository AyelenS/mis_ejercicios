// Escribe un programa que calcule el Índice de Masa Corporal (IMC). 
// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}); 

readline.question('Introduce tu peso en kg: ', (peso) => {
  readline.question('Introduce tu altura en metros: ', (altura) => {
    console.log(`Tu peso es: ${peso} kg`);
    const imc = peso / (altura * altura);
    console.log(`Tu Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);
    readline.close();
  });
});

