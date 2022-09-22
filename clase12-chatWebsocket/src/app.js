//NOTA
// en ningun servidor que deploye se puede usar nodemon
// por eso ponemos node en el package.json

const express = require('express')
const { Server } = require('socket.io')

//creacion servidor express
const app = express()
// como este codigo lo voy a deployar en otro servidor (pasa a produccion)
// el servidor ya tiene su propia configuracion en la que me asigna un puerto
// process.env es una variable de entorno.
// como estoy localmente, no existe la variable de entorno y se va a asignar el puerto 3000
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
const io = new Server(server)

//dirname me dice la ruta en que esta mi archivo
app.use(express.static(__dirname +'/public'))

let history = []

io.on('connection', socket => {
    console.log(`New user connected: ${socket.id}`)

    socket.on('message', data => {
        history.push(data)
        io.emit('history', history)
    })
    socket.on('registered', data => {
        //broadcast emite a todos los clientes conectados menos a uno mismo
        socket.broadcast.emit('newUser', data)
        //esta linea es para que cuando un nuevo usuario se conecte, le aparezcan los msj viejos
        socket.emit('history', history)
    })
})