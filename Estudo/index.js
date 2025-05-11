function Livro(name, author, age) {
    this.name = name;
    this.author = author
    this.age = age
    this.description = function() {
        console.log(`O livro ${this.name} foi escrito por ${this.author} em ${this.age}`)
    }
}

const book1 = new Livro("1984", "George Orwell", 1999)
const book2 = new Livro("Correr ou Morrer", "Adam White", 2007)
const book3 = new Livro("Jogos Vorazes", "Natasha Between", 1887)

console.log(book1)
book1.description()