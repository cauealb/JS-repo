// Adicionando um evento de scroll
const ul = document.querySelector("ul");
ul.addEventListener("scroll", () => {
    // Adicionando verificação da onde o scroll está em relação ao top
    if(ul.scrollTop > 206) {
        ul.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
})