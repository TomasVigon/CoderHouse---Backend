// import mongoose, { mongo } from "mongoose";
const mongoose = require("mongoose");
// mongoose sirve para crear un esquema. Las bd no relacionales son esquema free. Cada documento
// dentro de la misma coleccion puede tener una estructura distinta
// vamos a necesitar un orden igualmente dependiendo de las aplicaciones que querramos darle. 
// Mongoose nos va a permitir crear un esquema previo antes de la insercion de los datos.
// la principal diferencia enter conectarme con mongodb y mongoose es que este me permite crear un esquema

//vamos a insertar estos datos por codigo en una bd
const estudiantes = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    //{ nombre: 'Alex', apellido: 'Marin' },
    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 },
    // { nombre: 'Daniel', apellido: 'Gallo'} caso error
]

// esquema que requiero
const estudiantesSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true},
    edad: { type: Number, required: true},
    dni: { type: String, required: true, unique: true},
    curso: { type: String, required: true},
    nota: { type: Number, required: true}
})

// el nombre de la tabla va en minuscula y en singular
const EstudantesDAO = mongoose.model('estudiante', estudiantesSchema)

async function asyncCall() {
    //nos conectamos con mongodb
    await mongoose.connect('mongodb://localhost/colegio', {
        //si no se pudo conectar despues de 5 segundos tira error
        serverSelectionTimeoutMS: 5000,
    })

    console.log('Base de datos conectada')


    // con este recorrido del arreglo me inserta hasta encontrar el error

    // for (const estudiante of estudiantes) {
    //     await EstudantesDAO.create(estudiante)
    // }

    // este es en bulk, o inserta todos o ninguno (en caso de error)
    await EstudantesDAO.insertMany(estudiantes) //bulk

}

asyncCall();