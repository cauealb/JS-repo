// Criando um objeto
const user = {
    firstName: "Geovanna",
    lastName: "Alves",
    fullName: "Cauê Alves",
    age: 19,
    stacks: ["Javascript", "Typescript", "React", "Node"]
}

// Desestruturando
const { firstName, lastName, age, stacks } = user
// Desestruturando array
const [primary, secondary, lib, framework] = stacks


console.log(firstName, lastName, lib)