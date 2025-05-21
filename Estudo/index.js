// Criando uma função e uma arrow function
function myFunction() {}

// this no Arrow Function
const myArrowFunction = () => {
    this.name = "Cauê"
}
myArrowFunction()

console.log(this)