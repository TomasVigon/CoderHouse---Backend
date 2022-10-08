const options = require('./options/mysql.config')
const knex = require('knex')

//con esto conecto la libreria knex con mi base de datos
const database = knex(options)
//ejecuto este archivo

//est es una promesa
database.schema.createTable('cars', table => {
    table.increments('id')
    table.string('name', 20).nullable(false) //VARCHAR(20) and NOT NULL
    table.integer('price')
})
    .then(() => {console.log('Table created!')})
    .catch(err => console.log(err))
    .finally(() => database.destroy()) //esto destruye la conexion con la base de datos, 
    // para que en consola me devuelva el control