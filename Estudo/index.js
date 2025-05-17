// Criando uma classe sem o construtor
class User {    
    // Usando uma função estática na classe
    static showMessage() {
        console.log("Hello Word Javascript!");
    }
}

// Tentando usar a classe sem instânciar
User.showMessage()

// Intânciando antes de usar a função
// const newUser = new User();
// newUser.showMessage();