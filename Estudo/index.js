// Lançando um erro
let obj = []

try {
    
    // lançando um erro com as classes de Erros
    if(!obj.length > 0) {
        throw new Error("São existe dados nesse array")
    }

} catch (error) {
    // Verificando a classe que mandou o erro
    if(error instanceof Error) [
        console.log("Erro localizado no Error")
    ]
}