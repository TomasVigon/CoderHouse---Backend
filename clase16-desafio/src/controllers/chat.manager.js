const knex = require('knex')

class ChatManager {
    constructor(options, tableName) {
        const database = knex(options)
        database.schema.hasTable(tableName).then(exists => {
            if (!exists) {
                database.schema.createTable(tableName, table => {
                    table.increments('id').primary()
                    table.string('email', 100).nullable(false)
                    table.string('timestamp').nullable(false)
                    table.string('message', 500).nullable(false)
                })
                    .then(() => console.log('Table created!'))
                    .catch(err => console.log(err))
            }
          });
        this.database = database
        this.table = tableName
    }
    create = message => {
        const newMessage = {
            email: message.email,
            timestamp: new Date().toLocaleString(),
            message: message.message
        }
        return this.database(this.table).insert(newMessage)
            .then(() => {
                console.log('Message inserted!')
                return this.findAll()
            })
            .catch(err => console.log(err))
    }

    findAll = () => {
        return this.database.from(this.table).select('*')
            .then(data => JSON.parse(JSON.stringify(data)))
            .catch(err => console.log(err))
    }

}

module.exports = ChatManager