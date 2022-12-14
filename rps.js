let winCount = 0;
let lossCount = 0;
let tieCount = 0;
let playerInitial = '??';
let computerInitial = '??';

updateScore();
displayChoices(playerInitial, computerInitial);
const buttons = document.querySelectorAll('#buttons>button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let roundResult = playRound(button.id, getComputerChoice());
        processRoundResult(roundResult);
    });
});


function updateScore () {
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;
    document.getElementById("ties").innerHTML = tieCount;
}

function displayChoices(playerSelection, computerSelection) {
    document.getElementById('player').innerHTML = playerSelection;
    document.getElementById('computer').innerHTML = computerSelection;
}

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
    displayChoices(playerSelection, computerSelection);
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

function processRoundResult(roundResult) {
    switch (roundResult) {
        case 0:  console.log("tie"); //round tie
            tieRound();
            break;
        case 1: console.log("win"); //player win round
            winRound();
            break;
        case 2: console.log("lose"); //computer win round
            loseRound();
            break;
        default:
            console.log("Error")
    }
}

function winRound() {
    ++winCount;
    updateScore();
    if (winCount === 5){
        endGame(1); //call endGame when player wins
    }
}

function loseRound() {
    ++lossCount;
    updateScore();
    if (lossCount === 5) {
        endGame(2); //call endGame when player loses
    }
}

function tieRound() {
    ++tieCount;
    updateScore();
}

function endGame(gameResult) {
    let tieCountStr;
    let resultStr;
    if (tieCount === 1) {
        tieCountStr = "There was 1 tie.";
    }
    else {
        tieCountStr = "There were " + tieCount + " ties.";
    }
    if (gameResult === 1) {
        resultStr = "You won the game.\n" + tieCountStr;
    }
    else {
        resultStr = "You lost the game.\n" + tieCountStr;
    }
    disableGameButtons();
    createResultDisplay(resultStr);
    createResetButton();
}

const resultDisplay = document.createElement('div');

function createResultDisplay(resultStr) {
    resultDisplay.innerText = resultStr;
    document.body.appendChild(resultDisplay);
}

function removeResultDisplay() {
    document.body.removeChild(resultDisplay);
}

function createResetButton() {
    const resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'resetButton');
    resetButton.innerHTML = "Play Again";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', function(e) {
        resetGame();
        document.body.removeChild(resetButton);
        removeResultDisplay();
    });
}

function disableGameButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableGameButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function resetGame() {
    winCount = 0;
    lossCount = 0;
    tieCount = 0;
    updateScore();
    enableGameButtons();
    displayChoices(playerInitial, computerInitial);
}

