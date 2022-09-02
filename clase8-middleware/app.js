const express = require('express');
const userRouter = require('./routes/users');
const petRouter = require('./routes/pets');
const fileRouter = require('./routes/files');
const app = express();

app.listen(8080, () => console.log("server up"));

//para que entienda los json qe me van a mandar
app.use(express.json());

//ya por default busca el html index, sino hay que pasarle explicaitamente el nombre
//me permite acceder a los archivos en public
app.use(express.static('public'));

// en este caso todo lo de public esta dentr de la ruta content
// app.use('/content', express.static('public'));

// todos los metodos definidos en userRouter los voy a utilizar cuando la ruta sea users
app.use('/users', userRouter);       //cuando te pidan la ruta users va a ver que meotdos existen la ruta
app.use('/pets', petRouter);
app.use('/files', fileRouter);