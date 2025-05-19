// Criando uma classe de Animal
class Animal {
    constructor(name) {
        this.name = name
    }

    makeSong() {
        console.log("Algum som genérico do animal!")
    }
}

// Criando uma classe de Leão e de cachorro e fazendo herança com a classe Animal
class Lion extends Animal {

}

class Dog extends Animal {
    
}