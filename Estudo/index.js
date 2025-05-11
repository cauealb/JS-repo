// Acessando propriedades no mesmo escopo
const person = {
    name: "Geovanna",
    message: function() {
        console.log(`Olá ${person.name}`)
    }
}

person.message()