const express = require('express');

let frase = 'Frase inicial';
const app = express();

const server = app.listen(8080, () => console.log('Server Up'));

//esto se hace para que express pueda interpretar los json
app.use(express.json());

app.get('/api/frase', (req, res) => {
    res.send({frase})
});

app.get('/api/palabras/:pos', (req, res) => {
    let indice = req.params.pos-1;
    const arreglo = frase.split(" ");
    if (isNaN(indice)) return res.status(400).send({error: "Not a number"});
    if (indice < 0) return res.status(400).send({error: "Out of bound"});
    if (indice>arreglo.length-1) return res.status(400).send({error: "Out of bound"});
    res.send( {buscada: arreglo[indice]} );
});

app.post('/api/palabras', (req, res) => {
    let word = req.body.palabra;
    frase = frase.concat(` ${word}`);
    res.send({agregada: word, frase});
});

app.put('/api/palabras/:pos', (req, res) => {
    const param = req.params.pos - 1;
    const word = req.body.palabra;
    let arreglo = frase.split(" ");
    arreglo[param] = word;
    frase = arreglo.join(" ");
    res.send({frase});
});

app.delete('/api/palabras/:pos', (req, res) => {
    const param = req.params.pos - 1;
    let arreglo = frase.split(" ");
    arreglo.splice(param,1)
    frase = arreglo.join(" ");
    res.send({frase});
});