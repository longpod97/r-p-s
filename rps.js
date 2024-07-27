const rps = ["rock", "paper", "scissors"];

let humanScore = 0;
let compScore = 0;

let comp = getCompChoice();
let compChoice
let humanChoice 

let result

const rockBttn = document.getElementById("rock");
const paperBttn = document.getElementById("paper");
const scissorsBttn = document.getElementById("scissors");

const playerText = document.getElementById("player-text");
const compText = document.getElementById("computer-text");
const resultText = document.getElementById("result");
const playerScoreText = document.getElementById("player-score");
const compScoreText = document.getElementById("computer-score")

const buttons = document.getElementById("buttons");
const playButton = document.getElementById("play-button")
const nextRound = document.getElementById("next")

const playscore = document.getElementById("playscore")
const compscore = document.getElementById("compscore")

function getCompChoice() {
    let i = Math.floor(Math.random()*3);
    return rps[i];
}

rockBttn.addEventListener("click", Event => {
    humanChoice = "rock";
    playerText.innerText = "You chose rock.";
    compText.innerText = "Computer chose " + comp + ".";
    playRound(humanChoice, comp);
    buttons.style = "display: none;"
    resultText.innerText = result;
    playerScoreText.innerText = "  " + humanScore;
    compScoreText.innerText = "  " + compScore;
    toggle();
    scoreColour();
    gameComplete();
    
}); 

paperBttn.addEventListener("click", Event => {
    
    humanChoice = "paper";
    playerText.innerText = "You chose paper.";
    compText.innerText = "Computer chose " + comp + ".";
    playRound(humanChoice, comp);
    buttons.style = "display: none;"
    resultText.innerText = result;
    playerScoreText.innerText = "  " + humanScore;
    compScoreText.innerText = "  " + compScore;
    toggle();
    scoreColour();
    gameComplete();
    
}); 

scissorsBttn.addEventListener("click", Event => {
    
    humanChoice = "scissors";
    playerText.innerText = "You chose scissors.";
    compText.innerText = "Computer chose " + comp + ".";
    playRound(humanChoice, comp);
    buttons.style = "display: none;"
    resultText.innerText = result;
    playerScoreText.innerText = "  " + humanScore;
    compScoreText.innerText = "  " + compScore;
    toggle();
    scoreColour();
    gameComplete();
    
}); 

nextRound.addEventListener("click", Event => {
    buttons.style.display = "flex";
    nextRound.style.display = "none"
    playerText.innerText = "Choose your weapon!"
    compText.innerText = ""
    resultText.innerText = ""
    gameComplete();
    comp = getCompChoice();
    if (compScore < 1 || humanScore < 1) {
        playerScoreText.innerText = "  " + humanScore;
        compScoreText.innerText = "  " + compScore;
    }
    scoreColour();
    
    
    
})

function toggle() {
    if (buttons.style.display = "none") {
        nextRound.style.display = "flex"
    }
}


function playRound(player, computer) {
    if (player === computer) {
        result = "It's a draw!"
    } else if (player === "rock" && computer === "paper") {
        result = "You lose, paper beats rock!";
        compScore ++;
    } else if (player === "rock" && computer === "scissors") {
        result = "You win, rock beats scissors!";
        humanScore ++;
    } else if (player === "paper" && computer === "rock") {
        result = "You win, paper beats rock!";
        humanScore ++;
    } else if (player === "paper" && computer === "scissors") {
        result = "You lose, scissors beats paper!";
        compScore ++;
    } else if (player === "scissors" && computer === "rock") {
        result = "You lose, rock beats scissors!";
        compScore ++;
    } else if (player === "scissors" && computer === "paper") {
        result = "You win, scissors beats paper!";
        humanScore ++;
    }
}

function scoreColour() {
    if (humanScore > compScore) {
        playscore.style = "background-color: green;";
        compscore.style = "background-color: red;";
    } else if (compScore > humanScore) {
        playscore.style = "background-color: red;";
        compscore.style = "background-color: green;";
    } else if (humanScore < 1 && compScore < 1) {
        playscore.style = "background-color: lightgray;";
        compscore.style = "background-color: lightgray";
    }else if (humanScore == compScore) {
        playscore.style = "background-color: yellow;";
        compscore.style = "background-color: yellow";
    } 
}


function gameComplete() {
    if (humanScore > 4) {
        playerText.innerText = "Congratulations, "
        compText.innerText = "you beat the computer!"
        resultText.innerText = ""
        playerScoreText.innerText = "  " + humanScore;
        compScoreText.innerText = "  " + compScore;
        humanScore = 0
        compScore = 0
        
    } else if (compScore > 4) {
        playerText.innerText = "The computer beat you "
        compText.innerText = "this time!"
        resultText.innerText = ""
        playerScoreText.innerText = "  " + humanScore;
        compScoreText.innerText = "  " + compScore;
        humanScore = 0
        compScore = 0
        
    }

}
