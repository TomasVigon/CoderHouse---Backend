
let response = {} 

for( let i = 0; i < 10000; i++ ){
    let random = Math.floor(Math.random()*20+1)
    if(response[random]) {
        response[random]++
    } else {
        response[random] = 1
    }
}

console.log(response);