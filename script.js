console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;

while(humanScore !== 3 && computerScore !== 3) {
    playRound();
}

if(humanScore == 3) {
     console.log("You win!");
} else {
     console.log("The computer wins!");
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice == "Wrong input") {
        console.log("Please choose a valid option: rock, paper, or scissors.");
        return;
    }

    if(humanChoice == computerChoice) {
        return console.log("draw");
    } else if(humanChoice == "rock" && computerChoice == "scissor") {
        ++humanScore;
        return console.log("You point");
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        return console.log("You point");
    } else if(humanChoice == "scissor" && computerChoice == "paper") {
        ++humanScore;
        return console.log("You point");
    } else {
        ++computerScore;
        return console.log("Computer points");
    }
}


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissor"];
    let choice = prompt("Rock, Paper or Scissor?").trim().toLowerCase();
    
    if(validChoices.includes(choice)) {
        return choice;
    } else {
        return "Wrong input";
    }
}