// Criando objeto
const User = {
    firstName: "Cauê",
    lastName: "Alves",
    age: 19,
    stacks: ["JS", "TS", "React", "Node"],
    salary: 2700,
    cargo: "Desenvolvedor Web Junior"
}

// Usando spred oparation + Imutabilidade
const updateUser = {
    ...User,
    lastName: "Alves Barreto",
    stacks: [...User.stacks, "Next"],
    salary: 5000,
    cargo: "Desenvolvedor Full-Stack Javascript + Typescript"
}

//Desestruturando o objeto
const {lastName, cargo} = updateUser

console.log(lastName, cargo)