// npm i express-handlebars

const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const server = app.listen(8080, () => console.log('Server Up!'))

app.engine('handlebars', handlebars.engine())
app.set('views', './views')
//le decimos que el motor es handlebars
app.set('view engine', 'handlebars')

let llamadaBD = () => {
    return [
        {fname: "susana", lname: "oria", age: 24},
        {fname: "nico", lname: "tina", age: 54},
        {fname: "elsa", lname: "capunta", age: 25}
    ]
}

//este caso es diferente al anterior, aca no le paso nada para reemplazar
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/users', (req, res) => {
    // lamo a BD
    let users = llamadaBD()
    res.render('users', {
        users: users
    })
})

