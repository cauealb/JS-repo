const form = document.querySelector("#input");
const input = document.querySelector("#namePurchases");

// Eventos
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value === "") {
        alert("Digite sua compra!");
        return
    }

})