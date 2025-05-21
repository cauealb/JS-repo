// Selecionando os elementos do formulário
const amount = document.getElementById("amount"); 

amount.oninput = () => {
    let value = amount.value.replace(/\D+/g, "")

    value = Number(value) / 100
    
    amount.value = formatCurrency(value)
}

function formatCurrency(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return value
}