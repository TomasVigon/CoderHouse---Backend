let fs = require('fs')

//asi ejecute esto en consola node .\writeJSON.js yellow 9
let data = `{"${process.argv[2]}": ${process.argv[3]}}`
fs.writeFile('data.json', JSON.stringify(JSON.parse(data), null, 2), err => {
    if(!err) {
        console.log("File created!");
    }
})

// asi ejecute en consola node .\writeJSON.js hola
// console.log(process.argv[2]); //imprimio hola