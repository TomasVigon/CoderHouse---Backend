let knex = require('knex')

class ProductManager {
    constructor(options, tableName) {
        const database = knex(options)
        database.schema.hasTable(tableName).then(exists => {
            if (!exists) {
                database.schema.createTable(tableName, table => {
                    table.increments('id').primary()
                    table.string('title', 20).nullable(false)
                    table.integer('price').nullable(false)
                    table.string('thumbnail', 500).nullable(false)
                })
                    .then(() => console.log('Table created!'))
                    .catch(err => console.log(err))
            }
          });
        this.database = database
        this.table = tableName
    }
    create = (product) => {
        return this.database(this.table).insert(product)
            .then(() => {
                console.log('Product inserted!')
                return this.findAll()
            })
            .catch(err => console.log(err))
    }

    findAll = () => {
        return this.database.from(this.table).select('*')
            .then(data => JSON.parse(JSON.stringify(data)))
            .catch(err => console.log(err))
    }

    findById = (id) => {
        id = parseInt(id)
        return this.database.from(this.table).select('*').where('id', id)
            .then(data => JSON.parse(JSON.stringify(data)))
            .catch(err => console.log(err))
    }

    update = (id, product) => {
        id = parseInt(id)
        return this.database.from(this.table).where('id', id).update(product)
            .then(() => {
                console.log('Product updated!')
                return this.findById(id)
            })
            .catch(err => console.log(err))
    }

    delete = (id) => {
        id = parseInt(id)
        return this.database.from(this.table).where('id', id).del()
            .then(() => {
                console.log('Product deleted!')
                return this.findAll()
            })
            .catch(err => console.log(err))
    }
}

module.exports = ProductManager