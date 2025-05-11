// Criando uma função construtora
function Person(name, heigth) {
    const personOBJ = {};

    personOBJ.name = name;
    personOBJ.heigth = heigth;
    personOBJ.message = function() {
        console.log(`Esse é ${this.name} e tem ${this.heigth}`)
    }

    return personOBJ;
}

// Instâncioando a função contrutura
const person1 = new Person("Cauê", 1.67)
person1.message();