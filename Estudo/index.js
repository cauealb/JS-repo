// Criando classes com métodos e constroctor
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    // Criando método para a classe
    sendEmail() {
        console.log(`Email enviado para ${this.name}, e foi passado para ${this.email}`)
    }
}

// Intanciando uma classe
const user = new User("Cauê", "cauealvesdev@gmail.com")
user.sendEmail()