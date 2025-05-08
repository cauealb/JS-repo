const form = document.querySelector("#input");
const input = document.querySelector("#namePurchases");
const listUl = document.querySelector("ul");
const message_delete = document.querySelector("#message");
const message_delete_icon_exit = document.querySelector("#message img:last-child");
const mainList = document.querySelector("main")


// Eventos de submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value === "") {
        alert("Digite sua compra!");
        return
    }
    const retorno = createNewPurchase();

    listUl.prepend(retorno);
    input.value = "";
});

// Evento da div
listUl.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        message_delete.classList.add("message-delete-show")
        message_delete.classList.remove("message-delete-hide")

        e.target.closest("li").remove()
        return
    }

    if(e.target.tagName === "SPAN") {
        e.target.classList.toggle("active-checkbox")
        return
    }

    if(e.target.tagName === "DIV") {
        e.target.classList.toggle("border-click")
        e.target.classList.toggle("border-normal")
        return
    }
})

// Evento de scoll da lista
mainList.addEventListener("scroll", (e) => {
    if(mainList.scrollTop > 284) {
        mainList.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        input.focus()
    }

})

// Evento para desaparecer a messagem de item deletado
message_delete_icon_exit.addEventListener("click", () => {
    hideOrShowMessageDelete();
})

// função que abstrai a criação de li
function createNewPurchase() {
    const liItem = document.createElement("li");
    const divItem = document.createElement("div");
    divItem.classList.add("flex");
    divItem.classList.add("border-normal")
    liItem.append(divItem);

    const spanitem = document.createElement("span");
    spanitem.classList.add("check");

    const pItem = document.createElement("p");
    pItem.textContent = input.value;

    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", "img/Trash.png");
    imgItem.setAttribute("alt", "Icone de lixeira");
    imgItem.classList.add("trash")

    divItem.prepend(spanitem);
    divItem.append(pItem);
    divItem.append(imgItem);

    return liItem;
}


// Função que ativa de desativa a menssagem de deltedo
function hideOrShowMessageDelete() {
    message_delete.classList.toggle("message-delete-show")
    message_delete.classList.toggle("message-delete-hide")
}
