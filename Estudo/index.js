// Criando um objeto vázio
const obj = {};
console.log(typeof obj)

// Criando um objeto com propriedades e métodos
const user = {
    name: {
        firt_name: "Cauê",
        last_name: "Alves",
    },
    age: 19,
    adrees: {
        city: "São Paulo",
        number: 33,
        street: "Rua XYZ"
    },
    stacks: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Python", "Visual Basics"],
    girl_friend: "Geovanna Alves",
    role: "Software Enginner",
    experience: "7 months",
    method: () => {
        console.log("Hello Objects!")
    }
}

// Acessando propriedades simples
// console.log(user.role)
// console.log(user.stacks[5])

// Acessando propriedades de objetos alinhados
// console.log(user.adrees.number)

// Acesando métodos dos objetos
// user.method()


// Acessando propriedades siples com conchetes
console.log(user["girl_friend"])

// Acessando propriedades de objetos alinhados com conchetes
console.log(user["adrees"]["street"])