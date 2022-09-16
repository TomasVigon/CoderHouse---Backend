
// estoy creando un template de la parte de html q tiene que mostrar la info
const template = Handlebars.compile(`
<ul>
    <li>{{nombre}}</li>
    <li>{{apellido}}</li>
    <li>{{edad}}</li>
    <li>{{email}}</li>
    <li>{{telefono}}</li>
</ul>
`)

// como los datos pasan por el template, van a tener la forma del template. Luego
// eso se inyecta en el html
const html = template({
    nombre: "susana",
    apellido: "Oria",
    edad: 25,
    email: "a@a.com",
    telefono: "12345678"
})

document.getElementById("data").innerHTML = html