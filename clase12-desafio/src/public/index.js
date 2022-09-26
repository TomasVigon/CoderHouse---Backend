const socket = io()
let user
let chatBox = document.getElementById("chatBox")
Swal.fire({
    title: "Login",
    input: "email",
    text: "Enter your email",
    allowOutsideClick: false
}).then(result => {
    user = result.value
    socket.emit('registered', user)
})


let productsForm = document.getElementById('productsForm')

const handleSubmit = (evt, form, route) => {
    evt.preventDefault()
    let formData = new FormData(form)
    let obj = {}
    formData.forEach((value, key) => obj[key]=value)
    fetch(route, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
        .then(response => {
            socket.emit('newProduct', response)
        })
}
productsForm.addEventListener('submit', (e) => handleSubmit(e, e.target, '/products'))

socket.on('historyTable', data => {
    let history = document.getElementById('productsTable')
    let html
    if(data.length === 0) {
        html = `<div>No hay datos</div>`    
    } else {
        html = `
        <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>URL</th>
        </tr>
        `
        data.forEach(product => {
            html += `<tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.thumbnail}</td>
        </tr>`
        });
        html += `</table>`
    }
    
    history.innerHTML = html
})

chatBox.addEventListener('keyup', (evt) => {
    if(evt.key === "Enter") {
        socket.emit('message', {user, message: chatBox.value})
        chatBox.value = ""
    }
})

socket.on('historyChat', data => {
    let history = document.getElementById('historyChat')
    let messages = ""
    console.log('data', data);
    data.forEach(msg => {
        messages += `<span style='color: #0000FF'><strong>${msg.user}</strong></span>
        <span style='color: #765341'>${msg.date}</span>: 
        <span style='color: #008000;font-style: italic'>${msg.message}</span><br>`
    });
    history.innerHTML = messages
})