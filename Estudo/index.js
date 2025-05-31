// Criando uma Promisse
const apiCall = new Promise((resolve, reject) => {
    // Criando uma chamada de uma Api fake
    setTimeout(() => {
        resolve('Sucesso')
    }, 2000)
})

// apiCall
//     // Usando o then para pegar o valor do resultado
//     .then((sucess) => {
//         console.log(sucess)
//     })
//     // Usando o cath para pegar o valor do erro
//     .catch((erro) => {
//         console.log(erro)
//     })

// Usando o Async/Await
async function run() {
    const resposta = await apiCall
    console.log(resposta)
}

run()