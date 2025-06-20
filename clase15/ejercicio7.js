// Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no (lista de comidas ["Pizza", "Hamburguesa", "Tacos"]).

const prompt = require("prompt-sync")();

const comidas = ["Pizza", "Hamburguesa", "Tacos"];
const comidaBuscada = "Sushi";
if (comidas.includes(comidaBuscada)) {
    console.log(`${comidaBuscada} está en la lista.`);
} else {
    console.log(`${comidaBuscada} no está en la lista.`);
}

