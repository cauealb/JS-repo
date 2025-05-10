// Pega elementos
const question = document.getElementById("question");
const placeButton = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const result = document.querySelector("#result-container");
const resetButton = document.querySelector("#restart-btn");

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
        arrBtn[i].classList.add("border-normal")
        placeButton.append(arrBtn[i])
    }
})

arrBtn.forEach(item => {
    item.onclick = (e) => {
        nextButton.removeAttribute("disabled");

        resetBorderSelect();
        e.target.classList.toggle("border-select")

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

    if(currentQuetions === Quiz.length - 1) {
        result.classList.remove("hidden")

        return
    }

    currentQuetions++;
    newQuestion();
});

resetButton.addEventListener("click", () => {
    
})

function newQuestion() {
    switch (currentQuetions) {
        case 0:
            question.textContent = Quiz[currentQuetions].question;
            break;
        case 1:
            question.textContent = Quiz[currentQuetions].question;
            break;
        case 2:
            question.textContent = Quiz[currentQuetions].question;
            break;
    }
    resetBorderSelect();

    // Modifica os botões
    for(let i = 0; i < Quiz[currentQuetions].options.length; i++) {
        arrBtn[i].textContent = Quiz[currentQuetions].options[i];
    }

    if(currentQuetions === Quiz.length - 1) {
        nextButton.textContent = "Finalizar";
    } else {
        nextButton.setAttribute("disabled", "true");
    }
}

function resetBorderSelect() {
    for(let i = 0; i < 3; i++) {
        arrBtn[i].classList.remove("border-select");
    }
}