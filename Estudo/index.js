// Lançando um erro
let obj = []
let num = 100

try {
    
    if(!obj.length > 0) {
        throw new RangeError("São existe dados nesse array")
    }
    // lançando um erro de período númerico de classe
    if(num < 99) {
        throw new RangeError("Número menor que 100");
    }

} catch (error) {
    // Verificando a classe que mandou o erro
    if(error instanceof Error) {
        console.log("Erro localizado no Error")
    } else if(error instanceof RangeError) {
        console.log("Erro localizado no RangeErrors")
    }
}