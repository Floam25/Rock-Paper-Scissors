const startBox = document.querySelector('.start-box');
const mainBox = document.querySelector('.main-box');
const resultBox = document.querySelector('.result-box');
const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelector('.restart-btn');
const stopBtn = document.querySelectorAll('.stop-btn');
const humanScoreText = document.querySelector('.score-you');
const robotScoreText = document.querySelector('.score-computer');
const roundText = document.querySelector('.round-counter')
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultText = document.querySelector('.result');

let humanScore = 0;
let robotScore = 0;
let currentRound = 0;

function updateUI() {
    humanScoreText.textContent = `You: ${humanScore}`;
    robotScoreText.textContent = `Robot: ${robotScore}`;
    roundText.textContent = `Round: ${currentRound}`;
}

function removeList() {
    const block = document.querySelector('.game-info');
    if (block) {
        mainBox.removeChild(block);
    }
}

function startGame() {
    humanScore = 0;
    robotScore = 0;
    currentRound = 1;
    updateUI();
    removeList();
    startBox.classList.add('hidden');
    resultBox.classList.add('hidden');
    mainBox.classList.remove('hidden');

}

function stopGame() {
    startBox.classList.remove('hidden');
    resultBox.classList.add('hidden');
    mainBox.classList.add('hidden');
}

function getComputerChoice() {
    let randomIndex = (Math.floor(Math.random() * 3))
    return ['rock', 'paper', 'scissors'][randomIndex]
}

function checkWin(firstP, secondP) {
    if (firstP == secondP) return 0;
    if (firstP == 'rock') {
        return (secondP == 'paper' ? -1 : 1);
    } else if (firstP == 'paper') {
        return (secondP == 'rock' ? 1 : -1);
    } else {
        return (secondP == 'paper' ? 1 : -1);
    }
}


function playRound(humanChoice) {
    let robotChoice = getComputerChoice();
    let result = checkWin(humanChoice, robotChoice);
    const block = document.createElement('div');
    block.classList.add('game-info');
    currentRound++;
    removeList();
    if (result == 1) {
        humanScore++;        
        block.textContent = 'You won!'
        block.classList.add('win');
    } else if (result == -1) {
        robotScore++;
        block.textContent = 'You lost'
        block.classList.add('lose');
    } else {
        block.textContent = 'Its tie';
    }
    updateUI();
    mainBox.appendChild(block);

    if (humanScore == 5) {
        mainBox.classList.add('hidden');
        resultBox.classList.remove('hidden');
        resultText.textContent = 'You won :)';
    } else if (robotScore == 5) {
        mainBox.classList.add('hidden');
        resultBox.classList.remove('hidden');
        resultText.textContent = 'You lost :(';
    }
}


rockBtn.addEventListener('click', () => {playRound('rock')});
paperBtn.addEventListener('click', () => {playRound('paper')});
scissorsBtn.addEventListener('click', () => {playRound('scissors')});
startBtn.addEventListener('click', () => {startGame()});
restartBtn.addEventListener('click', () => {startGame()});

stopBtn.forEach((item) => {
    item.addEventListener('click', () => {stopGame()});
})

