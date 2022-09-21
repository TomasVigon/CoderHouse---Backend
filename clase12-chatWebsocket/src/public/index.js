const socket = io()
let user
let chatBox = document.getElementById("chatBox")
Swal.fire({
    title: "Login",
    input: "text",
    text: "Enter your name",
    allowOutsideClick: false
}).then(result => {
    user = result.value
    socket.emit('registered', user)
})

chatBox.addEventListener('keyup', (evt) => {
    if(evt.key === "Enter") {
        socket.emit('message', {user, message: chatBox.value})
        chatBox.value = ""
    }
})

//sockets
socket.on('newUser', data => {
    Swal.fire({
        icon: "success",
        text: `${data} user connected`,
        toast: true,
        position: "top-right"
    })
})

socket.on('history', data => {
    let history = document.getElementById('history')
    let messages = ""
    data.forEach(msg => {
        messages += `${msg.user} dice: ${msg.message}<br>`
    });
    history.innerHTML = messages
})