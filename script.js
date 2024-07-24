console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;


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

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
    console.log("print");
    if(humanScore !== 3 && computerScore !== 3) {
        playRound();
    } else if(humanScore == 3) {
        document.getElementById("result").innerHTML = "You win!";
   } else {
        document.getElementById("result").innerHTML = "The computer wins!";
   }
   document.getElementById("humanScore").innerHTML = humanScore;
   document.getElementById("computerScore").innerHTML = computerScore;
})
