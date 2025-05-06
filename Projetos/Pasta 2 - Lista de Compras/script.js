const form = document.querySelector("#input");
const input = document.querySelector("#namePurchases");

// Eventos
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value === "") {
        alert("Digite sua compra!");
        return
    }

    const liItem = document.createElement("li")
    const divItem = document.createElement("div")
    divItem.classList.add("flex")
    const spanitem = document.createComment("span")
    const pItem = document.createElement("p")
    const imgItem = document.createElement("img")

    imgItem.setAttribute("src", "img/Trash.png")
    imgItem.setAttribute("alt", "Icone de lixeira")

})