function getComputerChoice() {
    let RandomIndex = (Math.round(Math.random() * 179) % 3)
    return ['rock', 'paper', 'scissors'][RandomIndex]
}

function getHumanChoice() {
    return prompt("Make your choice", "")
}

let humanScore = 0
let computerScrore = 0


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    let result

    if (humanChoice == computerChoice) {
        alert("Its tie!")
        return
    }

    if (humanChoice == 'rock') {
        result = computerChoice == 'scissors'    
    } else if (humanChoice == 'paper') {
        result = computerChoice == 'rock'
    } else {
        result = computerChoice == 'paper'
    }

    if (result) {
        humanScore += 1
        alert(`You won! \nScore: ${humanScore}/${computerScrore}`)
    } else {
        computerScrore += 1
        alert(`You lost! \nScore: ${humanScore}/${computerScrore}`)
    }
}


function PlayGame() {
    humanScore = 0
    computerScrore = 0
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScrore) {
        alert("You won!!!")
    } else if (humanScore < computerScrore) {
        alert("Maybe in next time :(")
    } else {
        alert("Its tie!")
    }
}
PlayGame()