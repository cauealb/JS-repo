// Criando uma classe de erros customizadas
class MyError {
    constructor(message) {
        this.message = `MyError: ${message}`
    }
}

try {
    // Colocando o erro customizado
    throw new MyError("Erro customizado")

} catch (error) {
    if(error instanceof MyError) {
        console.log(error.message)
    } else {
        console.log("Errro genérico")
    }
}