const socket = io()
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

socket.on('history', data => {
    let history = document.getElementById('productsTable')
    let html = `
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
    history.innerHTML = html
})