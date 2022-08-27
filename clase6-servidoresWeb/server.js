const http = require('http');

// create server necesita un callback

const server = http.createServer((request, response) => {
    console.log('Request received!', request);
    response.end('Hola mundo') //cuando el servidor recibe una request, 
    // para comunicarse con el cliente lo hace a traves de response.end
})

//los servidores web deben escuchar un puerto de la computadora
//desde que declaro el server siempre se queda escuchando.

//puedo enviar en chrome localhost:8080, hago que chrome actue como cliente
//el servidor recibe una peticion, en este caso server.js actua como servidor. 
// Se imprime en consola Request received!
//el problema es que el servidor no devuelve nada y por eso el chrome queda cargando en localhost:8080

const connectedServer = server.listen(8080, () => {
    console.log('Server up!');
})