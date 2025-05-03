// Colocando evento da tela toda
window.addEventListener("load", (e) => {
    console.log("Tela foi recarregada com sucesso!")
})

// Colocando o evento no documento
addEventListener("click", (e) => {
    // console.log(e)

    // Pegando o evento o elemento que foi clicado
    console.log(e.target)
})