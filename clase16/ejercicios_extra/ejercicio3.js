/* Encontrar la película más corta en duración.
De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
Crear una lista de los títulos largos en minúsculas.
Imprimir en consola el título de la película más corta y la lista de títulos largos en minúsculas 

Lista de peliculas y su duracion:
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
]; 

*/

const prompt = require('prompt-sync')();

const movies = [
  { title: 'El Señor de los Anillos', duration: 200 },  
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];

const peliculaMasCorta = movies.reduce((acumulador, pelicula) => 
  pelicula.duration < acumulador.duration ? pelicula : acumulador
);
const peliculasRestantes = movies.filter(pelicula => pelicula !== peliculaMasCorta);
const titulosLargos = peliculasRestantes
  .filter(pelicula => pelicula.title.length > 10)
  .map(pelicula => pelicula.title.toLowerCase());
console.log("Película más corta:", peliculaMasCorta.title);
console.log("Títulos largos en minúsculas:", titulosLargos.join(', '));

