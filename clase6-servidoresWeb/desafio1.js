const http = require('http');


const server = http.createServer((request, response) => {
    console.log('Request received!');
    let currentTime = new Date();
    let actualHour = currentTime.getHours();
    if(actualHour >= 6 && actualHour <=12){
        response.end('Buenos días!');  
      }else if (actualHour >= 13 && actualHour <=19){
        response.end('Buenas tardes!');  
      }else{
        response.end('Buenas noches!');  
      }
})

const connectedServer = server.listen(8080, () => {
    console.log('Server up!');
})