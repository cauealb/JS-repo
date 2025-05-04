// Pegando o valor do input
const form = document.querySelector("form");
const amounInput = document.getElementById("amount");
const currency = document.getElementById("currency");

amounInput.addEventListener("input", () => {
    // Validando input
    const regex = /\D+/g;
    amounInput.value = amounInput.value.replace(regex, "")
})