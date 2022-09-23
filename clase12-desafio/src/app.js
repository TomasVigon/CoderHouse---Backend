const express = require('express')
const { Server } = require('socket.io')
const handlebars = require('express-handlebars')
const productsRouter = require('./routes/products')
let products = require('./models/product.model')

const app = express()

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
const io = new Server(server)

app.use(express.static('./src/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/products', productsRouter);

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', {products})
})

io.on('connection', socket => {
    console.log(`New user connected: ${socket.id}`)
})