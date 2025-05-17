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