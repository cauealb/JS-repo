// Adicionando um evento sem ser o addEventListener
const form = document.querySelector("form");

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Você enviou algo no formulário!!");
}