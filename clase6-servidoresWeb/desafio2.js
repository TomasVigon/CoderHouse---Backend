const express = require('express');
const moment = require('moment')

const app = express();

const server = app.listen(8080, () => console.log("server up"))
server.on("error", error => console.log(`Error en servidor ${error}`)) //esto es para mostrar los errores

let counter=0;

app.get('/', (request, response) => {
    response.send(`<h1 style="color:blue;">Hola</h1>`) //la fomra en que responde el servidor con el modulo express, response.send()
})

app.get('/visitas',  (request, response) => {
    counter++
    response.send(`La cantidad de visitas es ${counter}`)
})

// localhost:8080/home
app.get('/fyh',  (request, response) => {
    let today = moment();
    response.send(`${today.format('DD-MM-YYYY HH:mm:ss')}`)
})