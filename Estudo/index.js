// Criando uma função construtora
function Person(name, heigth) {
    const personOBJ = {};

    personOBJ.name = name;
    personOBJ.heigth = heigth;
    personOBJ.message = () => {
        console.log(`Esse é ${this.name} e tem ${this.heigth}`)
    }

    return personOBJ;
}