// Criando um objeto
const user = {
    firstName: "Geovanna",
    lastName: "Alves",
    full_name: "Cauê Alves",
    age: 19,
    stacks: ["Javascript", "Typescript", "React", "Node"]
}

// Desestruturando
// const { firstName, lastName, age, stacks, full_name: fullName } = user
// // Desestruturando array
// const [primary, secondary, lib, framework] = stacks

// Usando Rest Operator
const { stacks,...rest } = user

// Aplicando Rest Operator em um array
const [ primary, ...restArr ] = stacks


console.log(rest, restArr)