const rps = ["rock", "paper", "scissors"];

let humanScore = 0;
let compScore = 0;

const comp = getCompChoice();
const human = getHumanChoice();

function getHumanChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper or Scissors?");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (rps.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}


function getCompChoice() {
    let i = Math.floor(Math.random()*2);
    return rps[i];
}

/* function getHumanChoice() {
    const playerChoice = window.prompt("Rock, Paper or Scissors?");
    return playerChoice;
} */

function playRound(player, computer) {
    console.log("Your choice: " + player);
    console.log("Computer choice: " + computer);
    if (player === computer) {
        console.log("It's a draw!")
    } else if (player === "rock" && computer === "paper") {
        console.log("You lose, paper beats rock");
        compScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + compScore);
    } else if (player === "rock" && computer === "scissors") {
        console.log("You win, rock beats scissors");
        humanScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + compScore);
    } else if (player === "paper" && computer === "rock") {
        console.log("You win, paper beats rock");
        humanScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + compScore);
    } else if (player === "paper" && computer === "scissors") {
        console.log("You lose, scissors beats paper");
        compScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + compScore);
    } else if (player === "scissors" && computer === "rock") {
        console.log("You lose, rock beats scissors");
        compScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + compScore);
    } else if (player === "scissors" && computer === "paper") {
        console.log("You win, scissors beats paper");
        humanScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + compScore);
    }
}



playRound(getHumanChoice(), getCompChoice());
