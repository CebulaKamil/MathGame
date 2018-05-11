const startGameButton = document.getElementById("start-game");
const scoreValueSpan = document.getElementsByClassName("scoreValue");
const timeRemaining = document.getElementById("time");
const timeRemainingValue = document.getElementById("time-remaining-value");
const modalGameOver = document.getElementById("modal-game-over");
const trueAnswer = document.getElementById("true-answer");
const falseAnswer = document.getElementById("false-answer");
const questionBox = document.getElementById("question-box");
const answerPosition = document.getElementsByClassName("answer");
let   correctPositionOfBox;
let   timeRemainingCounter;
let   xy;
let   playing = false;
let   score;
let   action;

const show = function(id) {
    id.style.display = "block";
}

const hide = function(id) {
    id.style.display = "none";
}

const modalDisplayNone = function() {
    hide(modalGameOver);
}

const startPlayGame = function() {
    if (playing == true) {
        location.reload();
    } else {
        hide(modalGameOver);
        playing = true;
        score = 0;
        scoreValueSpan[0].innerHTML = score;
        show(timeRemaining);
        timeRemainingCounter = 60;
        timeRemainingValue.innerHTML = timeRemainingCounter;
        startGameButton.innerHTML = "Reset Game";
        startCountDown();
        generateQA();
    }
}

startGameButton.addEventListener("click", startPlayGame);

const generateQA = function() {
    /* Array with all answer */
    let answersArray = [];

    /* Create random numbers and display*/
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    xy = x * y;
    answersArray.push(xy);
    questionBox.innerHTML = x + " * " + y;

    /*Position of true answer */ 
    const correctPositionOfBox =  Math.floor(Math.random() * 4);
    answerPosition[correctPositionOfBox].innerHTML = xy;
    
    /* Create wrong answer */
    for (i=0; i<4; i++) {
       if (i !=  correctPositionOfBox) {
            let wrongAnswer;
            do {
                wrongAnswer = Math.floor(Math.random() * 101);  
                answersArray.push(wrongAnswer);      
            }
            while (answersArray.indexOf(wrongAnswer) == false);
            answerPosition[i].innerHTML = wrongAnswer;
       }
   }
}

for (i=0; i<4; i++) {
    /* Check click position value */
    answerPosition[i].addEventListener("click", function(){
        if (playing == true) {
            if(this.innerHTML == xy) {
                score ++;
                scoreValueSpan[0].innerHTML = score;

                /* Show correct box */
                show(trueAnswer);
                setTimeout(function(){
                    hide(trueAnswer);
                },1000);
                generateQA();
            } else {
            /* Show incorrect box */
            show(falseAnswer);
            score --;
            scoreValueSpan[0].innerHTML = score;
            setTimeout(function(){
                hide(falseAnswer);
                },1000);
            }
        }
    });
}

const startCountDown = function() {
    action = setInterval(function(){
        timeRemainingCounter -= 1;
        timeRemainingValue.innerHTML = timeRemainingCounter;
        if (timeRemainingCounter == 0) {
            stopCountDown();
        }
    },1000)
}

const stopCountDown = function() {
    questionBox.innerHTML = "X * X";
    for (i=0; i<4; i++) {
        answerPosition[i].innerHTML = "x";
    }
    hide(timeRemaining);
    clearInterval(action);
    playing = false;
    scoreValueSpan[1].innerHTML = score;
    show(modalGameOver);
    modalGameOver.addEventListener("click", modalDisplayNone);
    startGameButton.innerHTML = "Start Game";
}
