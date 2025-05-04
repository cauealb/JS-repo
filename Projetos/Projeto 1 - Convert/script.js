// Cotação das moedas
const USD = 5.66
const EUR = 6.40
const GBP = 7.50

// Pegando o valor do input
const form = document.querySelector("form");
const amounInput = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");

amounInput.addEventListener("input", () => {
    // Validando input
    const regex = /\D+/g;
    amounInput.value = amounInput.value.replace(regex, "")
})

// Executando o evento quando ele dá um submit no formulário
form.onsubmit = (e) => {
    e.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(currency.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(currency.value, EUR, "€");
            break
        case "GBP":
            convertCurrency(currency.value, GBP, "£")
            break
    }
}

const convertCurrency = function(currency, price, sybol) {
    try {
        footer.classList.add("show-result");
    } catch (error) {
        // Incluindo uma função para remover uma classe, caso ele dê errado.
        footer.classList.remove("show-result");

    }
}