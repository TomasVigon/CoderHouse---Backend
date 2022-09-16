const express = require('express')

const app = express()
const server = app.listen(8080, () => console.log('Server Up!'))

app.set('views', './views')
app.set('view engine', 'ejs')

let fakeData = [
    {fName: "Lau", lName: "Lam", age: 20},
    {fName: "Ale", lName: "Greco"},
    {fName: "Marc", lName: "Antony", age: 17}
]

app.get('/', (req, res) => {
    res.render('home', {
        message: "Hello Coders"
    })
})

app.get('/users', (req, res) => {
    res.render('users', {
        users: fakeData
    })
})