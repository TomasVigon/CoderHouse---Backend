const options = require('./options/mysql.config')
const knex = require('knex')

const database = knex(options)

database.from('cars').where('price', '<', 25000).del()
    .then(() => console.log('Car deleted!'))
    .catch(err => console.log(err))
    .finally(() => database.destroy())