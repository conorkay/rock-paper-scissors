function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelectionLowerCase === computerSelection) {
        return(0); //round tie
    }
    else if (playerSelectionLowerCase === "rock") {
        if (computerSelection === "scissors") {
            return(1); //player win
        }
        else {
            return(2); //computer win
        }
    }
    else if (playerSelectionLowerCase === "paper") {
        if (computerSelection === "rock") {
            return(1); //player win
        }
        else {
            return(2); //computer win
        }
    }
    else if (playerSelectionLowerCase === "scissors") {
        if (computerSelection === "paper") {
            return(1); //player win
        }
        else {
            return(2); //computer win
        }
    }
    else {
        console.log("Improper input.")
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let keepGoing = true;
    while (keepGoing) {
        let playerInput = prompt("Enter rock, paper, or scissors.");
        switch (playRound(playerInput, getComputerChoice())) {
            case 0:
                console.log("This round is a tie.")
                break;
            case 1:
                ++playerWins;
                console.log("You win this round.")
                break;
            case 2:
                ++computerWins;
                console.log("You lose this round.")
                break;
        }
        if (playerWins === 5){
            console.log("You won the game!")
            keepGoing = false;
        }
        else if (computerWins === 5){
            console.log("You lost the game.")
            keepGoing = false;
        }
    }
}

game();