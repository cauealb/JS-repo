// Aprendendo o evento de KeyDown
// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//     console.log(e.key)
// })

// Aprendendo o evento de KeyPress
const input = document.querySelector("input")
input.addEventListener("keypress", (e) => {
    console.log(e.target.textContent)
})