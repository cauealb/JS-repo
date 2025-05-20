// Lançando um erro
let obj = []

try {
    
    // lançando um erro com as classes de Erros
    if(!obj.length > 0) {
        throw new Error("São existe dados nesse array")
    }

} catch (error) {
    console.log(error)
}