const express = require('express')
const routes = require('./routes')

// npm i nodemon -D  el -D es solamente en desarrollo
const app = express()

app.use(express.json())
app.use(routes)

module.exports = app