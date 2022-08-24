let counter = 0;

let timer = setInterval(() => {
    if ( counter <=10) {
        console.log("Coder");
        counter++
    } else {
        clearInterval(timer)
    }
    
}, 200)

/*
setTimeout(() => {
    clearInterval(timer)
}, 1000)
*/