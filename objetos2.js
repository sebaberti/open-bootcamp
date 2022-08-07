const datosPersonales = {
    nombre: "sebastian",
    apellido: "berti",
    edad: 26,
    altura: 1.65,
    desarrollador: true,
}

const edad = datosPersonales.edad;
console.log(edad)

const mejoresAmigos = [{...datosPersonales},
{
    nombre: "Pedro",
    apellido: "Angulo",
    edad: 35,
    altura: 180,
    eresDesarrollador: true  
},
{
    nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
}
]

console.log(mejoresAmigos)


const ordenados = mejoresAmigos.sort((a,b) => b.edad - a.edad)
console.log(ordenados)