const fs = require('fs')

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
    }

    getById = async(id) => {
        try {
            if(fs.existsSync(`${this.fileName}.txt`)) {
                let data = await fs.promises.readFile(`${this.fileName}.txt`, 'utf-8')
                const info = JSON.parse(data)
                let objToReturn = info.find(obj => obj.id === id)
                if(!objToReturn) objToReturn = null
                return {status: "success", message: objToReturn } 
            }
            else {
                return {status: "error", message: 'The file does not exist' } 
            }
        } catch (err) {
            return {status: "error", message: err.message }
        }
    }

    getAll = async() => {
        try {
            if(fs.existsSync(`${this.fileName}.txt`)) {
                let data = await fs.promises.readFile(`${this.fileName}.txt`, 'utf-8')
                const info = JSON.parse(data)
                return {status: "success", message: info } 
            }
            else {
                return {status: "error", message: 'The file does not exist' } 
            }
        } catch (err) {
            return {status: "error", message: err.message }
        }
    }

    getLength = async() => {
        try {
            if(fs.existsSync(`${this.fileName}.txt`)) {
                let data = await fs.promises.readFile(`${this.fileName}.txt`, 'utf-8')
                const info = JSON.parse(data)
                return {status: "success", message: info.length } 
            }
            else {
                return {status: "error", message: 'The file does not exist' } 
            }
        } catch (err) {
            return {status: "error", message: err.message }
        }

    }
}

module.exports = Contenedor