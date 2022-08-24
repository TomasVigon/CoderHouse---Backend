const User = require('./User.js')

const main = () => {
    const usuario = new User('tomas', 'vigon',
     [ {name: "cosmos", author: "messi"}, {name: "matilda", author: "albert einstein"} ],
     ["cooper", "nala", "hera", "deli"]);

    console.log(usuario);
    console.log(usuario.countMascota());
    usuario.addPet('lila');
    console.log(usuario.countMascota());
    console.log(usuario.getFullName());
    console.log(usuario.getBooksName());
    usuario.addBook("la mano de dios", "yo");
    console.log(usuario.getBooksName());
    console.log(usuario);
}

main();