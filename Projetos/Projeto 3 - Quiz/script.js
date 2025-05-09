// Pega elementos
const question = document.getElementById("question");
const placeButton = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");

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
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília"],
        answer: 1
    },
    {
        id: 2,
        question: "Qual linguagem roda no navegador?",
        options: ["Python", "C++", "JavaScript"],
        answer: 0
    },
    {
        id: 3,
        question: "Qual desses é um framework para React?",
        options: ["Django", "Next.js", "Laravel"],
        answer: 2
    }
]

addEventListener("load", (e) => {
    newQuestion();
    for(let i = 0; i < 3; i++) {
        placeButton.append(arrBtn[i])
    }
})

arrBtn.forEach(item => {
    item.onclick = (e) => {
        nextButton.removeAttribute("disabled");
    }
});

nextButton.addEventListener("click", () => {
    if(nextButton.setAttribute("disabled", "true")) {
        return
    }

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

    nextButton.setAttribute("disabled", "true")
}