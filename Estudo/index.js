// Fazendo uma classe
class Animal {
    constructor(name, song) {
        this.name = name
        this.song = song
    }

    makeSong() {
        console.log(this.song);
    }

    makeName() {
        console.log(`My name is ${this.name}`);
    }
}

// Fazendo heraça com outra classe
class Lion extends Animal {

}

const SkarFace = new Lion("ScarFace", "ARRRRRRRRRRR!")
SkarFace.makeSong()
SkarFace.makeName()

// Criando uma classe de Dog e fazendo herança com a classe animal
class Dog extends Animal {

}

const Safira = new Dog("Safira", "AUUUUUUUUUUUUUU");
Safira.makeName()
Safira.makeSong();