// Criando um objeto
const user = {
    firstName: "Geovanna",
    lastName: "Alves",
    fullName: "Cauê Alves",
    age: 19,
    stacks: ["Javascript", "Typescript", "React", "Node"]
}

// Desestruturando
const { firstName, lastName, age } = user
console.log(firstName, lastName)