// Pega elementos
const question = document.getElementById("question");
const placeButton = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");

// Variável que controla as perguntas e as resposta
let currentQuetions = 0
let currentAnswer = 0

// Váriaveis para a pontuação
let pointsWin = 0

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
        answer: 2
    },
    {
        id: 2,
        question: "Qual linguagem roda no navegador?",
        options: ["Python", "C++", "JavaScript"],
        answer: 2
    },
    {
        id: 3,
        question: "Qual desses é um framework para React?",
        options: ["Django", "Next.js", "Laravel"],
        answer: 1
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
        currentAnswer = e.target.textContent
        const answerNow = Quiz[currentQuetions].answer

        if(currentAnswer === Quiz[currentQuetions].options[answerNow]) {
            pointsWin++
            return
        }
    }
})

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

    if(currentQuetions === Quiz.length - 1) {
        nextButton.textContent = "Finalizar"
    } else {
        nextButton.setAttribute("disabled", "true")
    }
}