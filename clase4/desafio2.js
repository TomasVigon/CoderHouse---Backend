const fs = require('fs')

try {
    fs.writeFileSync('fyh.txt', new Date().toLocaleString());
    let contenido = fs.readFileSync('fyh.txt', 'utf-8')
    console.log(contenido)
    
} catch(err){
    throw new Err (console.log(err.message))
}
