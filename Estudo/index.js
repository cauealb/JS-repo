// Acessando propriedades no mesmo escopo
const person = {
    name: "Geovanna",
    message: function() {
        console.log(`Olá ${person.name}`)
    }
}

person.message()

// Acessando com 'this'
const user = {
    email: "cauealvesdev@gmai.com",
    message: function() {
        console.log(`Email: ${this.email}`)
    }
}