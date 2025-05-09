// Pega elementos
const question = document.getElementById("question");
const placeButton = document.getElementById("options-container");

// Variável que controla as perguntas
let currentQuetions = 0

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

addEventListener("load", () => {
    newQuestion();
    console.log(question.textContent)
})

document.addEventListener("click", () => {
    currentQuetions++
    newQuestion();
})


function newQuestion() {
    switch (currentQuetions) {
        case 0:
            question.textContent = Quiz[0].question
            break;
        case 1:
            question.textContent = Quiz[1].question
            break;
        case 2:
            question.textContent = Quiz[2].question
            break;
    }
}