// Criando uma Promisse
const apiCall = new Promise((resolve, reject) => {
    // Imprimindo o erro ou o sucesso
    // resolve('Sucesso')
    reject('Errou!')
})

console.log(apiCall)