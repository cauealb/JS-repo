// Criando uma Promisse
const apiCall = new Promise((resolve, reject) => {
    // Imprimindo o erro ou o sucesso
    // resolve('Sucesso')
    // reject('Errou!')

    // Criando uma chamada de uma Api fake
    setTimeout(() => {
        reject('erro na instância')
    }, 2000)
})

apiCall
    // Usando o then para pegar o valor do resultado
    .then((sucess) => {
        console.log(sucess)
    })
    // Usando o cath para pegar o valor do erro
    .catch((erro) => {
        console.log(erro)
    })