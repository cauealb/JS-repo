// Criando uma Promisse
const apiCall = new Promise((resolve, reject) => {
    // Imprimindo o erro ou o sucesso
    // resolve('Sucesso')
    // reject('Errou!')

    // Criando uma chamada de uma Api fake
    setTimeout(() => {
        resolve('Sucesso')
    }, 2000)
})

apiCall
    // Usando o then para pegar o valor do resultado
    .then((sucess) => {
        console.log(sucess)
    })