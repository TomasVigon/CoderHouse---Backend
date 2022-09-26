const express = require('express')
const { Server } = require('socket.io')
const handlebars = require('express-handlebars')
const moment = require('moment')
const productsRouter = require('./routes/products')
let products = require('./models/product.model')
let messages = require('./models/chat.model')
const Contenedor = require('./controllers/chatFileSupport')
const container = new Contenedor('chatHistory');

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
    
    socket.on('newProduct', data => {
        //emite a todos
        //en este caso data es lo mismo que products, porque ya el post hace el push
        io.emit('historyTable', data)
    })

    socket.on('message', data => {
        messages.push({...data, date: moment().format('DD/MM/YYYY hh:mm:ss')})
        container.save({...data, date: moment().format('DD/MM/YYYY hh:mm:ss')})
        //emite a todos
        io.emit('historyChat', messages)
    })

    socket.on('registered', data => {
        //recien cuando te conectas podes ver el log de prodcutos
        socket.emit('historyTable', products)
        socket.emit('historyChat', messages)
    })

    
})