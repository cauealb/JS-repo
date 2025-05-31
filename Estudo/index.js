// Criando uma Promisse
const apiCall = new Promise((resolve, reject) => {
    // Criando uma chamada de uma Api fake
    setTimeout(() => {
        reject('Erro')
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
    // Usando o try para pegar o erro na promisse
   try{
    const reposta = await apiCall
    console.log(reposta)
   } catch(error) {
        console.log(error)
   } 
}

run()