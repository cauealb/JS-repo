// Pegando o valor do input
const amounInput = document.getElementById("amount");
amounInput.addEventListener("input", () => {
    // Validando input
    const regex = /\D+/g;
    amounInput.value = amounInput.value.replace(regex, "")
})