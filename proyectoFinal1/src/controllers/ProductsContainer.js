const fs = require('fs')

class ProductsContainer {
    constructor(filePath) {
        this.filePath = filePath
        this.id = 0
    }

    save = async (objToAdd) => {
        try {
            if(fs.existsSync(this.filePath)) {
                let data = await fs.promises.readFile(this.filePath, 'utf-8')
                const info = JSON.parse(data)
                this.id = info.length == 0 ? 1 : info[info.length-1].id + 1
                const dataToAdd = [ ...info, { ...objToAdd, id: this.id } ]
                await fs.promises.writeFile(this.filePath, `${JSON.stringify(dataToAdd, null, 2)}`)
                return {status: "success", message: this.id }
            } else {
                this.id = 1;
                const infoArray = [ { ...objToAdd, id: this.id } ]
                await fs.promises.writeFile(this.filePath, `${JSON.stringify(infoArray, null, 2)}`)
                return {status: "success", message: this.id } 
            }
        } catch (err) {
            return {status: "error", message: err.message }
        }
    }

    getById = async(id) => {
        try {
            if(fs.existsSync(this.filePath)) {
                let data = await fs.promises.readFile(this.filePath, 'utf-8')
                const info = JSON.parse(data)
                let objToReturn = info.find(obj => obj.id === id)
                if(!objToReturn) return {error: "Producto no encontrado"}
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
            if(fs.existsSync(this.filePath)) {
                let data = await fs.promises.readFile(this.filePath, 'utf-8')
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

    update = async(id, objToEdit) => {
        try {
            if(fs.existsSync(this.filePath)) {
                let data = await fs.promises.readFile(this.filePath, 'utf-8')
                let info = JSON.parse(data)
                let objToReturn = info.find(obj => obj.id === id)
                if(!objToReturn) return {error: "Producto no encontrado"}
                info[info.indexOf(objToReturn)] = { ...objToEdit, id };
                await fs.promises.writeFile(this.filePath, `${JSON.stringify(info, null, 2)}`)
                return {status: "success", message: info[id-1] }
            } else {
                return {status: "error", message: 'The file does not exist' } 
            }
        } catch (err) {
            return {status: "error", message: err.message }
        }
    }

    deleteById = async (id) => {
        try {
            if(fs.existsSync(this.filePath)) {
                let data = await fs.promises.readFile(this.filePath, 'utf-8')
                let info = JSON.parse(data)
                let objToDelete = info.find(obj => obj.id === id)
                if(!objToDelete) return {error: "Producto no encontrado"}
                info = info.filter(elem => elem.id !== id)
                const dataToAdd = [ ...info ]
                await fs.promises.writeFile(this.filePath, `${JSON.stringify(dataToAdd, null, 2)}`)
                return {status: "success" }
            } else {
                return {status: "error", message: 'The file does not exist' } 
            }
        } catch (err) {
            return {status: "error", message: err.message }
        }
    }

    deleteAll = async () => {
        try {
            if(fs.existsSync(this.filePath)) {
                const dataToAdd = []
                await fs.promises.writeFile(this.filePath, `${JSON.stringify(dataToAdd, null, 2)}`)
                return {status: "success" }
            } else {
                return {status: "error", message: 'The file does not exist' } 
            }
        } catch (err) {
            return {status: "error", message: err.message }
        }
    }
}

module.exports = ProductsContainer