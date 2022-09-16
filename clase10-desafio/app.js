const express = require('express');
const handlebars = require('express-handlebars')

const productsRouter = require('./routes/products');

const app = express();

const server = app.listen(8080, () => console.log("Server up!"));
server.on("error", error => console.log(`Error en servidor ${error}`))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/products', productsRouter);
app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

