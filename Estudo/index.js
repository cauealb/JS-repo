// Colocando evento da tela toda
window.addEventListener("load", (e) => {
    console.log("Tela foi recarregada com sucesso!")
})

// Colocando o evento no documento
addEventListener("click", (e) => {
    // Deixando o evento como padrão
    e.preventDefault()

    // Pegando o evento o elemento que foi clicado
    console.log(e.target)
})