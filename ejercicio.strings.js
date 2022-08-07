let nombre = "sebastian";

let apellido = "Berti";

const estudiante = nombre.concat(" ").concat(apellido)

const estudianteMayus = estudiante.toUpperCase();

console.log(estudianteMayus)

const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

let numLetras = estudiante.length;
console.log(numLetras)

let primerLetra = nombre.substring(0,1)
console.log(primerLetra)

let ultimaLetra = apellido[apellido.length - 1]
console.log(ultimaLetra)

const estudianteSinEspacios = estudiante.replace(" ", "")
console.log(estudianteSinEspacios)

const contieneNombre= estudiante.includes("sebastian")
console.log(contieneNombre)