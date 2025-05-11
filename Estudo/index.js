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

const person2 = new Person("Geovanna", 1.60)
console.log(person2.name)

console.log(person1 === person2)

// Criando uma outra função construtora de uma forma diferente
function Product(name, price) {
    this.name = name;
    this.heigth = price;

    const produto = {};
    produto.name = this.name;
    produto.price = this.price;

    
}