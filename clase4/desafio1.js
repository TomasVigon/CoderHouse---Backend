
const fin = () => console.log("terminé")

const mostrarLetras = (cadena, cb) => {
    let index = 0;
    const timer = setInterval(() => {
        if (index < cadena.length) {
            console.log(cadena[index])
            index++
        }
        else {
            clearInterval(timer)
            cb()
        }
    }, 1000)
}

setTimeout(()=>mostrarLetras("Hola",fin),0)
setTimeout(()=>mostrarLetras("Hola",fin),250)
setTimeout(()=>mostrarLetras("Hola",fin),500)
/*
const fin = () => console.log('termine');

const mostrarLetras = (cadena, cb) => {
    console.log(cadena.length);
    //recorrer la cadena
    const timer = setInterval(() => {
        for(let i=0; i<cadena.length; i++) {
            if (i < cadena.length -1){
                console.log(cadena[i])
            } else {
                clearInterval(timer)
                cb()
            }
        }
    }, 1000)
}

mostrarLetras('Hola', fin)
*/