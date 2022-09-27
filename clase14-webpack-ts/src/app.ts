import express from 'express'
import { getTime } from './utils/utils'
import Person from './utils/Person'

const person1:Person = new Person("Jonatha", "Sanso")

const app = express()

app.get('/', (req, res) => {
    res.send({
        time: getTime(),
        name: person1.getFullName()
    })
})

app.listen(8080, () => console.log('Server up'))