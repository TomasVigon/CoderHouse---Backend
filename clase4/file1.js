const fs = require('fs')
//puedo importar fs porque es un modulo del core

//en clase4.txt va a escribir el texto del segundo parametro
//fs.writeFileSync('clase4.txt', 'Mi primera vez escribiendo en un archivo')

/* esta y la de abajo son compatibles
let contenido = fs.readFileSync('clase4.txt', 'utf-8')
console.log(contenido)
*/

// let contenido = fs.readFileSync('clase4.txt')
//     console.log(contenido.toString()

/*
try {  //este try catch es cuando el archivo no existe y lo quiero leer
    let contenido = fs.readFileSync('clase4.txt')
    console.log(contenido.toString())
} catch(err) {
    //console.log('el archivo no existe', err.message); //esta linea era si no existia
    fs.writeFileSync('clase4.txt', 'Ahora si existe')
}*/

// con esta funcion agrego nuevo contenido a mi archivo
// fs.appendFileSync('clase4.txt', '\ntexto nuevo agregado')

//borra el archivo
fs.unlinkSync('clase4.txt')