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
        .then(response => console.log(response))
}
// aunque le estoy enviando el post y hago el fetch de ese servicio, no se actualizan los datos 
// asumo que esto es porque la comunicacion no es bidireccional como la de los sockets

productsForm.addEventListener('submit', (e) => handleSubmit(e, e.target, '/products'))
