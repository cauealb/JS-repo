// Criando uma classe de Animal
class Animal {
    constructor(name) {
        this.name = name
    }

    static makeSong() {
        console.log("Algum som genérico do animal!")
    }
}

Animal.makeSong()