const express = require('express')
const { Server } = require('socket.io')
const handlebars = require('express-handlebars')
const productsRouter = require('./routes/products')
let products = require('./models/product.model')

const app = express()

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
const io = new Server(server)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('./src/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/products', productsRouter);

io.on('connection', socket => {
    console.log(`New user connected: ${socket.id}`)
    
    socket.emit('history', products)
    socket.on('newProduct', data => {
        //emite a todos
        //en este caso data es lo mismo que products, porque ya el post hace el push
        io.emit('history', data)
    })
})