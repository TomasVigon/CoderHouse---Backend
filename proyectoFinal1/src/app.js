const express = require('express');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/products', productsRouter);

app.use((req, res) => {
    res.status(404).send(
        {error: -2, descripcion: `ruta ${req.originalUrl} metodo ${req.method} no implementada`})
    })
    
// en glitch
//     "engines": {
//         "node": "16.14.2"
//       }
    