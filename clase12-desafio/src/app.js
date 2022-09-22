const express = require('express')
const handlebars = require('express-handlebars')
const productsRouter = require('./routes/products')

const app = express()

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/products', productsRouter);

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})