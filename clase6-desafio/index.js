const express = require('express');

const app = express();

const server = app.listen(8080, () => console.log("server up"))
server.on("error", error => console.log(`Error en servidor ${error}`)) //esto es para mostrar los errores

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let products = [
    {
        title: "escuadra",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id: 1
    },
    {
        title: "calculadora",
        price: 234.56,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        id: 2
    },
    {
        title: "globo terraqueo",
        price: 345.67,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geography-planet-school-256.png",
        id: 3
    }
]

app.get('/', (request, response) => {
    response.send(`<h1 style="color:blue;">boca</h1>`)
})

app.get('/productos',  (request, response) => {
    response.send({
        status: "success",
        productos: products
    })
})

app.get('/productoRandom',  (request, response) => {
    let i = getRandomInt(products.length)
    console.log(i);
    response.send({
        producto: products[i]
    })
})