// Criando uma classe sem o construtor
class User {    
    constructor(message) {
        this.message = message
    }
    // Usando uma função estática na classe
    static showMessage() {
        console.log(this.message);
    }
}

// Tentando usar a classe sem instânciar
User.showMessage()

// Intânciando antes de usar a função
// const newUser = new User();
// newUser.showMessage();