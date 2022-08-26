const Contenedor = require('./Contenedor.js')

const main = () => {
    const theObj = { title: 'crack', price: 1234, thumbnaill: 'https://plataforma.coderhouse.com/cursos/32110/programacion-backend' };
    const theSecObj = { title: ':)', price: 2, thumbnaill: 'https://plataforma.coderhouse.com/cursos/32110/programacion-backend' };

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