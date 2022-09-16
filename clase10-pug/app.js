const express = require('express')

const app = express()
const server = app.listen(8080, () => console.log('Server Up!'))

app.set('views', './views')
// html To Pug
app.set('view engine', 'pug')

app.get('/datos', (req, res) => {
    let {min, max, nivel, titulo} = req.query
    res.render('home', {
        titulo,
        min,
        max,
        nivel
    })
})