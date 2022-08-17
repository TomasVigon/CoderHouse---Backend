const pA = new Promise((resolve, reject) => {
    //Hace algo
    resolve("Valor de A")
    //reject("Error en A")
})

pA  // => resolvió a "Valor de A"
    .then() // => pB => resolvió a "Valor de A"
    .then() // => pC => resolvió a "Valor de A"
    .then(data => console.log(data)); // => pD => resolvió a "Valor de A"
//pA.then(data => console.log(data));

//pA.then(null, (err) => console.log(err));  //aca estoy haciendo lo mismo que en la linea de abajo
//pA.catch((err) => console.log(err));
