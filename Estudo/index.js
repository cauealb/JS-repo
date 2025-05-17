// Criando uma classe sem o construtor
class User {    
    showMessage() {
        console.log("Hello Word Javascript!");
    }
}

// Tentando usar a classe sem instânciar
// User.showMessage()

// Intânciando antes de usar a função
const newUser = new User();
newUser.showMessage();