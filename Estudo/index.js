// Usando arguments na Função
function soma() {
    console.log(arguments)
}

// soma(1, 2, 3, 4, 5)

// usando arguments no Arrow Function
const somaArrow = () => {
    console.log(arguments)
}

somaArrow(1, 2, 3, 4)