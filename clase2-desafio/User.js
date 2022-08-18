class User {
    constructor(name, surname, books, pets) {
        this.name = name
        this.surname = surname
        this.books = books
        this.pets = pets
    }

    getFullName() {
        return this.name + this.surname
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

module.exports = User