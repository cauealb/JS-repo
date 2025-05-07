const form = document.querySelector("#input");
const input = document.querySelector("#namePurchases");
const listUl = document.querySelector("ul");
const trashIcon = document.getElementsByClassName("trash");
const message_delete = document.querySelector("#message");
const message_delete_icon_exit = document.querySelector("#message img:last-child");

// Evento de Load
addEventListener("load", () => {
    console.log(trashIcon)
})

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
    imgItem.classList.add("trash")

    divItem.prepend(spanitem);
    divItem.append(pItem);
    divItem.append(imgItem);

    listUl.prepend(liItem);
    input.value = "";

    console.log(trashIcon)
});

// Evento da apaarecer a mensagem quando apaga algo da lista
listUl.addEventListener("click", (e) => {
    if(e.target.classList.contains("trash")) {
        message_delete.classList.toggle("message-delete-show")
        message_delete.classList.toggle("message-delete-hide")
    }
})



// Evento para desaparecer a messagem de item deletado
message_delete_icon_exit.addEventListener("click", () => {
    console.log(trashIcon)
    message_delete.classList.toggle("message-delete-show")
    message_delete.classList.toggle("message-delete-hide")
})