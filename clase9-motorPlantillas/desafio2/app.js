//  ESTE EJEMPLO ES COMO HANDLEBARS PODIRA FUNCIONAR POR DENTRO

const express = require('express')
const fs = require('fs')
const app = express()
const server = app.listen(8080, () => console.log('Server Up!'))

// creamos nuestro propio motor de plantillas en express
// le pedimos que lea extensiones cte y reemplaza los titulos y mensajes
app.engine('cte', (filePath, objectToReplace, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(new Error(err))
        const template = content.toString()
            .replace("^^titulo$$", objectToReplace.titulo)
            .replace("^^mensaje$$", objectToReplace.mensaje)
        return callback(null, template)
    })
})

// este le dice que los templates estan en la carpeta views
app.set('views', './views')
// aca le digo que el motor de plantillas es este que acabo de crear arriba cte
app.set('view engine', 'cte')

//en la raiz se renderiza el template bienvenida y reemplaza la parte dinamica con el objeto 
// que le estoy pasando
app.get('/', (req, res) => {
    // para plantillas se usa render
    res.render('Bienvenida', {
        titulo: "Plantilla custom",
        mensaje: "Hola custom template"
    })
})