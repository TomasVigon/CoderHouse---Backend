const express = require('express')
const {Server} = require('socket.io')

const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

//midleware
app.use(express.static('./public'))
// para que la conexion se genere en la ruta chat
//app.use('/chat', express.static('./public'))


//aca enlazamos express con websocket
const io = new Server(server)

let log = []

//cuando un cliente se conecte a mi socket, ocurre una coneccion y se ejecuta la funcion
// socket. io esta programado rientado a eventos
io.on('connection', socket => {
    console.log(`Socket ${socket.id} Connected`);
    socket.broadcast.emit('newUserNotification')
    //esta linea va a hacer que a penas se conecte un cliente
    // ya reciba los mensajes anteriores
    //esto es xq se ejecuta el socket.on de msgResponse
    socket.emit('msgResponse', log)
    socket.on('message', data => {
        log.push({userId: socket.id, message: data});
        //este emit solamente le esta enviando al cliente que envio
        //cuando el otro cliente envia algo, recien ahi recibe todos los msj de la comunicacion
        socket.emit('msgResponse', log)
        //para que el servidor emita los datos a todos los clientes conectados
        io.emit('msgResponse', log)
    })
})