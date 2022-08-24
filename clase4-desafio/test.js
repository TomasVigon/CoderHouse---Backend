const Contenedor = require('./Contenedor.js')

const main = () => {
    const theObj = { prueba: 1234, messi: 'crack' };
    const theSecObj = { prueba: 134, pais: ':)' };

    const container = new Contenedor('producto');

    container.save(theObj).then(result => {
        console.log(result)
        return container.save(theObj)
    }).then(result => {
        console.log(result)
        return container.save(theSecObj)
    }).then(result => {
        console.log(result)
        return container.getById(3)
    }).then(result => {
        console.log(result)
        return container.deleteById(2)
    }).then(result => {
        console.log(result)
        return container.save(theSecObj)
    }).then(result => {
        console.log(result)
        return container.getAll()
    }).then(result => {
        console.log(result)
        return container.deleteAll()
    }).then(result => {
        console.log(result)
        return container.save(theSecObj)
    }).then(result => {
        console.log(result)
        return container.save(theObj)
    }).then(result => console.log(result))
}

main();