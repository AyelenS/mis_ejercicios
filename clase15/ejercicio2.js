// Lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"] (el ultimo invitado no puede asistir).
// Eliminar al último invitado y mostrar quién fue eliminado y el estado actualizado de la lista.

const prompt = require("prompt-sync")();

const invitados = ["Ana", "Juan", "Carlos", "Sofía"];

const ultimoInvitado = invitados.pop();
console.log(`El invitado eliminado es: ${ultimoInvitado}`);
console.log("Lista actualizada de invitados:", invitados);


