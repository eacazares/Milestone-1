const triviaQuestions = document.getElementById("questions-container");
const op1Button = document.getElementById('op1');
const op2Button = document.getElementById('op2');
const op3Button = document.getElementById('op3');
const op4Button = document.getElementById('op4');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', next);

let currentQuestion = 0;

const questions = [
    {
        question: "What year was the original Star Wars movie released?",
        answers: [
            {option: "1977", answer: true},
            {option: "1980", answer: false},
            {option: "1976", answer: false},
            {option: "1981", answer: false},
        ]
    },

    {
        question: "What is the name of the wookiees' homeworld?",
        answers: [
            {option: "Naboo"},
            {option: "Hoth"},
            {option: "Kashyyyk"},
            {option: "Dagobah"},
        ]
    },

    {
        question: "What age did Padmé Amidala become a queen?",
        answers: [
            {option: "18"},
            {option: "14"},
            {option: "13"},
            {option: "20"},
        ]
    },

    {
        question: "Who built C-3PO?",
        answers: [
            {option: "Anakin Skywalker", answer: true},
            {option: "Luke Skywalker", answer: false},
            {option: "Princess Leia", answer: false},
            {option: "Han Solo", answer: false},
        ]
    },

]
   
function showQuestions(){
    currentQuestion = 0;
    triviaQuestions.innerText = questions[currentQuestion].question;
    op1Button.innerText = questions[currentQuestion].answers[0].option;
    op2Button.innerText = questions[currentQuestion].answers[1].option;
    op3Button.innerText = questions[currentQuestion].answers[2].option;
    op4Button.innerText = questions[currentQuestion].answers[3].option;
}

showQuestions();

function next(){
    currentQuestion++;
    if(currentQuestion >= 4){
        nextButton.classList.add('hide');
    }
    triviaQuestions.innerText = questions[currentQuestion].question;
    op1Button.innerText = questions[currentQuestion].answers[0].option;
    op2Button.innerText = questions[currentQuestion].answers[1].option;
    op3Button.innerText = questions[currentQuestion].answers[2].option;
    op4Button.innerText = questions[currentQuestion].answers[3].option;
}

next();