const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

let names = ''
let totPrice = 0
let avgPrice = 0
let lowestPrice;
let highestPrice;
let response = {}

for (let i=0 ; i < productos.length; i++) { 
    if(i == 0){
        names = `${productos[i].nombre}`
        lowestPrice = productos[i].precio
        highestPrice = productos[i].precio
    } else {
        names= names + `, ${productos[i].nombre}`
        if ( productos[i].precio < lowestPrice ) {
            lowestPrice = productos[i].precio
        }
        if ( productos[i].precio > highestPrice ) {
            highestPrice = productos[i].precio
        }
    }
    totPrice = totPrice + productos[i].precio
}

console.log(names);
console.log(totPrice);
avgPrice=totPrice/productos.length;
console.log(avgPrice);
console.log(lowestPrice);
console.log(highestPrice);

let obj = { nombre: names, precioTotal: totPrice, promedio: avgPrice, masBajo: lowestPrice, masAlto: highestPrice}
console.log(obj);

/* rta profe 
const products = [
    { id:1, name:'Escuadra', price:323.45 },
    { id:2, name:'Calculadora', price:234.56 },
    { id:3, name:'Globo Terráqueo', price:45.67 },
    { id:4, name:'Paleta Pintura', price:456.78 },
    { id:5, name:'Reloj', price:67.89 },
    { id:6, name:'Agenda', price:78.90 }
]
let names = products.map(product => product.name).join(', ')
let total = products.reduce((acc, product) => acc+product.price, 0)
let avg = total / products.length
let min = products[0]
let max = products[0]
products.forEach(product => {
    if (product.price<min.price) min=product
    if (product.price>max.price) max=product
})
let response = {
    names,
    total: total.toFixed(2),
    avg: avg.toFixed(2),
    min,
    max
}
console.log(response)
*/