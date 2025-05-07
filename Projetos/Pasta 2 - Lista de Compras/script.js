const form = document.querySelector("#input");
const input = document.querySelector("#namePurchases");
const listUl = document.querySelector("ul");
const trashIcon = document.querySelectorAll("#listPurchases li div img:last-child");
const message_delete = document.querySelector("#message");

// Eventos de submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value === "") {
        alert("Digite sua compra!");
        return
    }

    const liItem = document.createElement("li");
    const divItem = document.createElement("div");
    divItem.classList.add("flex");
    liItem.append(divItem);
    

    const spanitem = document.createElement("span");

    const pItem = document.createElement("p");
    pItem.textContent = input.value;

    const imgItem = document.createElement("img");

    imgItem.setAttribute("src", "img/Trash.png");
    imgItem.setAttribute("alt", "Icone de lixeira");

    divItem.prepend(spanitem);
    divItem.append(pItem);
    divItem.append(imgItem);

    listUl.prepend(liItem);
    input.value = "";
});

// Evento da apaarecer a mensagem quando apaga algo da lista
trashIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        message_delete.classList.toggle("message-delete-show")
        message_delete.classList.toggle("message-delete-hide")
    })
})
