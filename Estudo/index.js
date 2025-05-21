// Criando uma função e uma arrow function
// this na função
function myFunction() {
    this.latName = "Cauê"
}
myFunction()
console.log(typeof myFunction)

// this no Arrow Function
const myArrowFunction = () => {
    this.name = "Cauê"
}
myArrowFunction()

// console.log(this)