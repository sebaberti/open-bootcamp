const compras = ["azucar", "leche", "pan", "mayonesa","queso"];

compras.push("aceite de girasol");

console.log(compras)

compras.pop("aceite de girasol");
console.log(compras)

const peliculas = [
    {titulo: "narnia", director: "Ramon", fecha:2011},
{titulo: "simuladores", director: "julian", fecha: 2000},
{ titulo:"ryf", director: "juan", fecha: 2015}
];

const peliculasPosteriores = peliculas.filter(obj => obj.fecha > 2010)
console.log(peliculasPosteriores)

const directoresPeliculas = peliculas.map(obj => obj.director)
console.log(directoresPeliculas)

const titulosPeliculas = peliculas.map(obj => obj.titulo)
console.log(titulosPeliculas)

const directores = ["Ramon","Julian","Juan"];
const titulos = ["narnia","simuladores","ryf"];

const directoresTitulos = directores.concat(titulos)
console.log(directoresTitulos)

const directoresTitulosProp = [...directores, ...titulos];
console.log(directoresTitulosProp)