// variables
const triviaQuestions = document.getElementById("questions-container");

const op1Button = document.getElementById('op1');
const op2Button = document.getElementById('op2');
const op3Button = document.getElementById('op3');
const op4Button = document.getElementById('op4');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');

const playerScore = document.getElementById('player-score');


// event listeners
nextButton.addEventListener('click', next);
// submitButton.addEventListener('click', submit);

let currentQuestion = 0;
let score = 0;

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
            {option: "Naboo", answer: false},
            {option: "Hoth", answer: false},
            {option: "Kashyyyk", answer: true},
            {option: "Dagobah", answer: false},
        ]
    },

    {
        question: "What age did Padmé Amidala become a queen?",
        answers: [
            {option: "18", answer: false},
            {option: "14", answer: true},
            {option: "13", answer: false},
            {option: "20", answer: false},
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

    {
        question: "What is Chewbacca's weapon of choice?",
        answers: [
            {option: "Blaster rifle", answer: false},
            {option: "Lightsaber", answer: false},
            {option: "Metal club", answer: false},
            {option: "Bowcaster", answer: true},
        ]
    },

    {
        question: "Who delivers the final blow that destroys the second Death Star?",
        answers: [
            {option: "Anakin Skywalker", answer: false},
            {option: "Luke Skywalker", answer: false},
            {option: "Lando Calrissian", answer: true},
            {option: "Han Solo", answer: false},
        ]
    },

    {
        question: "Who adopted Princess Leia?",
        answers: [
            {option: "Bail Organa", answer: true},
            {option: "Captain Antilles", answer: false},
            {option: "Darth Vader", answer: false},
            {option: "Owen and Beru Lars", answer: false},
        ]
    },

    {
        question: "Where did the Clone Wars begin?",
        answers: [
            {option: "Tatooine", answer: false},
            {option: "Geonosis", answer: true},
            {option: "Naboo", answer: false},
            {option: "Coruscant", answer: false},
        ]
    },

]
   
function showQuestions(){
    currentQuestion = 0;
    triviaQuestions.innerText = questions[currentQuestion].question;
    op1Button.innerText = questions[currentQuestion].answers[0].option;
    op1Button.onclick = () => {
        // let answerIndex = 0;
        if(questions[currentQuestion].answers[0].answer){
            if(score<8){
                score++
            }   
        }
        playerScore.innerText = score;
        if(currentQuestion< 7){
            next();
        }

    }
    op2Button.innerText = questions[currentQuestion].answers[1].option;
    op2Button.onclick = () => {
        // let answerIndex = 0;
        if(questions[currentQuestion].answers[1].answer){
            if(score<8){
                score++
            }   
        }
        playerScore.innerText = score;
        if(currentQuestion< 7){
            next();
        }

    }
    op3Button.innerText = questions[currentQuestion].answers[2].option;
    op3Button.onclick = () => {
        // let answerIndex = 0;
        if(questions[currentQuestion].answers[2].answer){
            if(score<8){
                score++
            }   
        }
        playerScore.innerText = score;
        if(currentQuestion< 7){
            next();
        }

    }
    op4Button.innerText = questions[currentQuestion].answers[3].option;
    op4Button.onclick = () => {
        // let answerIndex = 0;
        if(questions[currentQuestion].answers[3].answer){
            if(score<8){
                score++
            }   
        }
        playerScore.innerText = score;
        if(currentQuestion< 7){
            next();
        }

    }

}

showQuestions();

function next(){
    currentQuestion++;
     if(currentQuestion >= 7){
         nextButton.classList.add('hide');
    }
    triviaQuestions.innerText = questions[currentQuestion].question;
    op1Button.innerText = questions[currentQuestion].answers[0].option;
    op1Button.onclick = () => {
        // let answerIndex = 0;
        if(questions[currentQuestion].answers[0].answer){
            if(score<8){
                score++
            }   
        }
        playerScore.innerText = score;
        if(currentQuestion< 7){
            next();
        }

    }
    op2Button.innerText = questions[currentQuestion].answers[1].option;
    op3Button.innerText = questions[currentQuestion].answers[2].option;
    op4Button.innerText = questions[currentQuestion].answers[3].option;
}

