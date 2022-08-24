let fs = require('fs')

// fs.readFile('fyh.txt', (err, data) => {
//     if(err) {
//         console.log(err.message);
//     } else {
//         console.log(data.toString())
//     }
// })

// fs.writeFile('clase4.txt', 'Hello world', err => {
//     if(!err) {
//         fs.readFile('clase4.txt', (err, data) => {
//             if(!err) console.log(data.toString());
//         })
//     }
// })

// fs.appendFile('clase4.txt', '\nsome data', err => {
//     if(!err) console.log('success!');
// })

fs.unlink('fyh.txt', err => {
    if(!err) console.log('Deleted!');
})