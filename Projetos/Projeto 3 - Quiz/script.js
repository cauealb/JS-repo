// Pega elementos
const question = document.getElementById("question");
const placeButton = document.getElementById("options-container");

// Variável que controla as perguntas
const currentQuetions = 0

// Estrutura das perguntas

const Quiz = [
    {
        id: 1,
        question: "Messi?",
        options: ["Não", "Sim", "Talvez"],
        answer: 1
    },
    {
        id: 2,
        question: "Cristiano Ronaldo?",
        options: ["Não", "Sim", "Talvez"],
        answer: 0
    },
    {
        id: 3,
        question: "Neymar?",
        options: ["Não", "Sim", "Talvez"],
        answer: 2
    }
]

document.addEventListener("click", () => {
    currentQuetions++
})
