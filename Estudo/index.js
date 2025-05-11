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