const express = require('express');

const app = express();

const server = app.listen(8080, () => console.log("server up"));
const frase = 'Hola mundo como estan';

app.get('/api/frase', (req, res) => {
    res.send({ frase });
});

//:num indica que es un parametro dinamico (nos viene por el EP)
app.get('/api/letras/:num', (req, res) => {
    let letra = req.params.num-1; //lo que devuelve req.params.num es un string, pero javascript no es tipado
    if ( isNaN(letra) ) return res.status(400).send({ message: "Excediste el limite de la frase" });
    if ( letra < 0 ) return res.status(400).send({ message: "Excediste el limite de la frase" });
    if ( letra > frase.length - 1) return res.status(400).send({ message: "Excediste el limite de la frase" });
    res.send({ letra: frase[letra] });
})

app.get('/api/palabras/:num', (req, res) => {
    const indice = req.params.num-1;
    const arreglo = frase.split(" ");
    if ( isNaN(indice) ) return res.status(400).send({ message: "Excediste el limite de la frase" });
    if ( indice < 0 ) return res.status(400).send({ message: "Excediste el limite de la frase" });
    if ( indice > arreglo.length - 1) return res.status(400).send({ message: "Excediste el limite de la frase" });
    res.send( {palabra: arreglo[indice]} );
})