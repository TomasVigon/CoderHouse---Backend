const delay = ret => {for(let i=0; i<ret*3e6; i++);}

function hacerTarea(num) {
    console.log('haciendo tarea ' + num);
    delay(100)
}

console.log('inicio tareas');
hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
console.log('fin tareas');
console.log('otras tareas...');
