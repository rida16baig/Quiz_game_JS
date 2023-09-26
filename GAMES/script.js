let question = [
    {
        questions: `QNo.1 : What is the Capital of Pakistan?`,
        answer: {
            ans1: `karachi`,
            ans2: `P`,
            ans3: `Islamabad`,
            ans4: `none of them`

        },
        correct: `Islamabad`
    }
    ,
    {
        questions: `QNo.2 : What is the Official Language of Pakistan?`,
        answer: {
            ans1: `Hindi`,
            ans2: `English`,
            ans3: `Urdu`,
            ans4: `All of the above`

        },
        correct: `English`
    }
    ,
    {
        questions: `QNo.3 : Who was the former Prime Minister of Pakistan?`,
        answer: {
            ans1: `Bilawal Bhutto`,
            ans2: `Imran Khan`,
            ans3: `Maryam Nawaz`,
            ans4: `none of them`

        },
        correct: `Imran Khan`
    }
    ,
    {
        questions: `QNo.4 : What is the Currency of Pakistan?`,
        answer: {
            ans1: `Dollar`,
            ans2: `Euro`,
            ans3: `Rupee`,
            ans4: `Dirham`

        },
        correct: `Rupee`
    }
    ,
    {
        questions: `QNo.5 : What is the National Game of Pakistan?`,
        answer: {
            ans1: `Cricket`,
            ans2: `Hockey`,
            ans3: `Football`,
            ans4: `None of them`

        },
        correct: `Hockey`
    }
]

let currentQuestionIndex = 0;
let score = 0;
let total = question.length;

start();

function start() {

    currentQuestionIndex = 0;
    score = 0;

    let start = document.querySelector('#start');
    start.addEventListener("click", function () {
        addQuestion();
    });
}

function addQuestion() {
    let quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h3>${question[currentQuestionIndex].questions}</h3>`;

    let answers = question[currentQuestionIndex].answer;
    for (let key in answers) {
        let button = document.createElement("button")
        button.innerText = answers[key];
        button.classList.add("ans");
        quizContainer.append(button);
    }

    checkAns();
}

function checkAns() {
    let ansBtn = document.querySelectorAll(".ans");
    for (let i = 0; i < ansBtn.length; i++) {
        ansBtn[i].addEventListener("click", function () {

            if (question[currentQuestionIndex].correct == this.innerText) {
                score++;
            }
            currentQuestionIndex++;


            if (currentQuestionIndex < question.length) {
                addQuestion();
            } else {
                endGame();
            }
        })

    }
}

function endGame(){

    document.querySelector(".quiz-container").innerHTML=`<h3>SCORE : ${score} / ${total}</h3>`;
    let restart = document.createElement("button");
    restart.id="start";
    restart.innerText="Restart Game";
    document.querySelector(".quiz-container").append(restart);
start();
}