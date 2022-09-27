const saludar = (nombre: string) => {
    console.log(`Hola ${nombre}`);
    
}

const list:Array<number> = [1, 2, 3]
//como le marque que nombre es un string
//me marca error si no le paso ese tipo de variable
saludar("tom")

//el comando node_modules/.bin/tsc ./ejemplo-ts.ts
// me deberia generar un ejemplo-ts.js, pero yo no lo pude correr