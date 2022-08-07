const fecha = new Date()
console.log(fecha)

const fechaN = new Date(1996,7,2)
console.log(fechaN)

const fechaMayor = fecha> fechaN;
console.log(fechaMayor)

const dia = fechaN.getDate()
console.log(dia)

const mes = fechaN.getMonth() +1
console.log(mes)

const año = fechaN.getFullYear()
console.log(año)