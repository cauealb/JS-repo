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
        console.log(this.name);
    }
}