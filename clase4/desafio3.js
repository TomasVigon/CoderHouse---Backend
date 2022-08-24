const fs = require('fs')

try {
    fs.readFile('package.json', 'utf-8', (err, data) => {
        if (err) throw 'error'
        const info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data)
        }
        info.contenidoObj.author="Coder"
        fs.writeFile('package.json', JSON.stringify(info.contenidoObj, null, 2), err => {
            if(err) throw 'error'
        })
    })
} catch (err) {
    console.log(err.message);
}
