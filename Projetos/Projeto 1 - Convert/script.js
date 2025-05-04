// Cotação das moedas
const USD = 5.66
const EUR = 6.40
const GBP = 7.50

// Pegando o valor do input
const form = document.querySelector("form");
const amounInput = document.getElementById("amount");
const currency = document.getElementById("currency");

amounInput.addEventListener("input", () => {
    // Validando input
    const regex = /\D+/g;
    amounInput.value = amounInput.value.replace(regex, "")
})

// Executando o evento quando ele dá um submit no formulário
form.onsubmit = (e) => {
    e.preventDefault();
}

const convertCurrency = function(currency, price, sybol) {
    console.log(currency, price, sybol)
}