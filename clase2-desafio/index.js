const User = require('./user.js')

/*
class User {
    constructor(name, surname, books, pets) {
        this.name = name
        this.surname = surname
        this.books = books
        this.pets = pets
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    addPet(pet) {
        this.pets.push(pet)
    }
    countMascota() {
        return this.pets.length
    }
    
    addBook(name, author) {
        this.books.push({ name, author })
    }

    getBooksName() {
        const booksName = []
        for (let i=0; i<this.books.length; i++) {
            booksName.push(this.books[i].name)
        }
        return booksName
    }

}
*/
const main = () => {
    const usuario = new User('tomas', 'vigon',
     [ {name: "cosmos", author: "messi"}, {name: "matilda", author: "albert einstein"} ],
     ["cooper", "nala", "hera", "deli"]);

    console.log(usuario);
    console.log(usuario.countMascota());
    usuario.addPet('lila');
    console.log(usuario.countMascota());
    console.log(usuario);
    console.log(usuario.getFullName());
    console.log(usuario.getBooksName());
    usuario.addBook("la mano de dios", "yo");
    console.log(usuario);
    console.log(usuario.getBooksName());
}

main();