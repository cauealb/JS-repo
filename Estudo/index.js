// Criando a classe com o constructor

class Product {
    constructor(name) {
        // Criando propriedades
        this.name = name
    }
}

// Pegando a propríedade criada
const product1 = new Product("Teclado");
console.log(product1.name)

const product2 = new Product("Mouse");
console.log(product2.name)