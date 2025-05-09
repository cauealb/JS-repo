// Pega elementos
const question = document.getElementById("question");
const placeButton = document.getElementById("options-container");

// Variável que controla as perguntas
let currentQuetions = 0

// Criando botões para as opções
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
let arrBtn = [btn1, btn2, btn3];


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

addEventListener("load", (e) => {
    newQuestion();
    for(let i = 0; i < 3; i++) {
        placeButton.append(arrBtn[i])
    }
})

document.addEventListener("click", () => {
    currentQuetions++
    newQuestion();
})


function newQuestion() {
    switch (currentQuetions) {
        case 0:
            question.textContent = Quiz[currentQuetions].question
            break;
        case 1:
            question.textContent = Quiz[currentQuetions].question
            break;
        case 2:
            question.textContent = Quiz[currentQuetions].question
            break;
    }

    // Modifica os botões
    for(let i = 0; i < Quiz[currentQuetions].options.length; i++) {
        arrBtn[i].textContent = Quiz[currentQuetions].options[i]
    }
}