function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "Rock";
    }
    else if (random == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice");
    return choice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock!");
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors!");
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors!");
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper!");
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper!");
    }
    else {
        console.log("Draw");
    }
}

function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("Computer wins the game!");
    }

}

playGame();