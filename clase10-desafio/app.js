const express = require('express');

const productsRouter = require('./routes/products');

const app = express();

const server = app.listen(8080, () => console.log("Server up!"));
server.on("error", error => console.log(`Error en servidor ${error}`))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/products', productsRouter);
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('home')
})

