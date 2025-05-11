// Acessando propriedades no mesmo escopo
const person = {
    name: "Cauê",
    message: function() {
        console.log(`Olá ${person.name}`)
    }
}