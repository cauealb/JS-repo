// Novo evento de input
const input = document.querySelector("input")
input.addEventListener("input", () => {
    // Expressões Regulares
    const value = input.value
    const regex = /\D+/g

    // Match com regex
    // console.log(value.match(regex))
    // Usando test com regex
    console.log(regex.test(value))
})