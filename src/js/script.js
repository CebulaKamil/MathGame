const startGameButton = document.getElementById("start-game");
let playing = false;
let score;
let action;
let timeRemainingCounter;
const scoreValueSpan = document.getElementsByClassName("scoreValue");
const timeRemaining = document.getElementById("time");
const timeRemainingValue = document.getElementById("time-remaining-value");
const modalGameOver = document.getElementById("modal-game-over");

const show = function(id) {
    id.style.display = "block";
}

const hide = function(id) {
    id.style.display = "none";
}

const generateQA = function() {

}

const startPlayGame = function() {
    if (playing == true) {
        location.reload();
    } else {
        hide(modalGameOver);
        playing = true;
        score = 5;
        scoreValueSpan[0].innerHTML = score;
        show(timeRemaining);
        timeRemainingCounter = 60;
        timeRemainingValue.innerHTML = timeRemainingCounter;
        startGameButton.innerHTML = "Reset Game";
        startCountDown();
        generateQA();
    }
}

const modalDisplayNone = function() {
    hide(modalGameOver);
}

const stopCountDown = function() {
    hide(timeRemaining);
    clearInterval(action);
    playing = false;
    scoreValueSpan[1].innerHTML = score;
    show(modalGameOver);
    modalGameOver.addEventListener("click", modalDisplayNone);
    startGameButton.innerHTML = "Start Game";
}

const startCountDown = function() {
    action = setInterval(function(){
        timeRemainingCounter -= 10;
        timeRemainingValue.innerHTML = timeRemainingCounter;
        if (timeRemainingCounter == 0) {
            stopCountDown();
        }
    },1000)
}

startGameButton.addEventListener("click", startPlayGame);
