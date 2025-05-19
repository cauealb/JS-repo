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
    // Sobre escrevendo a função já existênte da classe pai
    makeSong() {
        console.log("ARRRRRRRR!")
    }
}

// Instânciando a classe de leão e cachorro
const SkarFace = new Lion("SkarFace")
SkarFace.makeSong()

class Dog extends Animal {

}

const Safira = new Dog("Safira")
Safira.makeSong()