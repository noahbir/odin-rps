console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function changeComputerChoice(str) {
    let computerChoice = document.getElementById("computerChoice");
    
    if(str == "rock") {
        computerChoice.src = "rock.jpg";
    } else if(str == "paper") {
        computerChoice.src = "paper.webp";
    } else if(str == "scissors") {
        computerChoice.src = "scissors.avif";
    }
    computerChoice.style.display = "block";
}

function checkResult(str1, str2) {
    if(str1 == str2) {
        updateResult("draw");
    } else if(str1 == "rock" && str2 == "scissors") {
        updateResult("You point");
        ++humanScore;
    } else if(str1 =="paper" && str2 == "rock") {
        updateResult("You point");
        ++humanScore;
    } else if(str1 == "scissors" && str2 == "paper") {
        updateResult("You point");
        ++humanScore;
    } else {
        updateResult("Computer points");
        ++computerScore;
    }
}

function updateResult(str) {
    let result = document.getElementById("result");
    result.innerHTML = str;
}

function updateScoreHuman() {
    let scoreHuman = document.getElementById("humanScore");
    scoreHuman.innerHTML = humanScore;
}

function updateScoreComputer() {
    let scoreComputer = document.getElementById("computerScore");
    scoreComputer.innerHTML = computerScore;
}

function checkWin() {
    if(humanScore == 3) {
        updateResult("You win!");
        return true;
    } else if(computerScore == 3) {
        updateResult("Computer wins!");
        return true;
    } else {
        return false;
    }
}


const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", function(e) {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    changeComputerChoice(computerChoice);
    checkResult(humanChoice, computerChoice);
    updateScoreComputer();
    updateScoreHuman();
    if(checkWin() == true) {
        computerScore = 0;
        humanScore = 0;
        updateScoreComputer();
        updateScoreHuman();
    }
});

const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", function(e) {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    changeComputerChoice(computerChoice);
    checkResult(humanChoice, computerChoice);
    updateScoreComputer();
    updateScoreHuman();
    if(checkWin() == true) {
        computerScore = 0;
        humanScore = 0;
        updateScoreComputer();
        updateScoreHuman();
    }
});

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", function(e) {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    changeComputerChoice(computerChoice);
    checkResult(humanChoice, computerChoice);
    updateScoreComputer();
    updateScoreHuman();
    if(checkWin() == true) {
        computerScore = 0;
        humanScore = 0;
        updateScoreComputer();
        updateScoreHuman();
    }
});