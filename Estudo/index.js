// Adicionando um evento sem ser o addEventListener
const form = document.querySelector("form");

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Você enviou algo no formulário!! #1");
}

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Você enviou algo no formulário!! #2");
}

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    console.log("Você enviou algo no formulário!! #3");
})

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    console.log("Você enviou algo no formulário!! #4");
})