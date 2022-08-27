const express = require('express');

const app = express();

// este server ya me responde algo cuando lo levanto.
const server = app.listen(8080, () => console.log("server up"))
server.on("error", error => console.log(`Error en servidor ${error}`)) //esto es para mostrar los errores

//este es un endpoint que responde solamente a la ruta raiz '/'
// localhost:8080
app.get('/', (request, response) => {
    response.send('Holas') //la fomra en que responde el servidor con el modulo express, response.send()
})

// localhost:8080/users
app.get('/users',  (request, response) => {
    response.send({
        name: 'Tom',
        ege: 8
    })
})

// localhost:8080/home
app.get('/home',  (request, response) => {
    response.send("<h1>Hola mundo home</h1>")
})