// la funcion io esta definida el el archivo que llame dentro del tag <script>
// configuracion inicial del CLIENTE, para conectarme al socket
const socket = io();

let chatInput = document.getElementById('chatInput')

chatInput.addEventListener('keyup', evt => {
    // cuando doy enter al input recien ahi se envia al sevidor
    if(evt.key === 'Enter'){
        //envio el mensaje que me lelga en el input del html mediante el socket
        socket.emit('message', chatInput.value)
    }
    
})

socket.on('msgResponse', data => {
    let msgResponse = document.getElementById('msgResponse')
    let messages = ""
    data.forEach(msg => {
        messages = messages + `[${msg.userId}]: ${msg.message}<br>`
    });
    msgResponse.innerHTML = messages
    chatInput.value=""
})
socket.on('newUserNotification', data => {
    alert('New user conected')
})