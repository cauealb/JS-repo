// Selecionando os elementos do formulário
const form = document.querySelector("form");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
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

form.onsubmit = (e) => {
    e.preventDefault()

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category: {
            id: category.value,
            name: category.options[category.selectedIndex].text
        },
        amount: amount.value
    }

    console.log(newExpense)
}

function expenseAdd(newExpense) {
    try {
        
    } catch (error) {
        alert("Não é possível adicionar uma nova despensa")
        console.log(error)
    }
}