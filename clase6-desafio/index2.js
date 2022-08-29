const express = require('express');
const Contenedor = require('./Contenedor.js');

const app = express();

const server = app.listen(8080, () => console.log("server up"))
server.on("error", error => console.log(`Error en servidor ${error}`)) //esto es para mostrar los errores

const container = new Contenedor('productos');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

app.get('/productos',  (request, response) => {
    container.getAll().then(result => response.send(result.message));
})

app.get('/productoRandom',  (request, response) => {
    container.getLength().then(result => {
        let i = getRandomInt(result.message);
        container.getAll().then(result => response.send({
            producto: result.message[i]
        }));
    })
    
})