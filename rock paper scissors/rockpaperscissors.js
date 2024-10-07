var humanScore = 0;
var computerScore = 0;

const message = document.querySelector("message");

const result = document.querySelector("result");
result.style.cssText = "display: flex; justify-content: center; font-size: 18px; font-weight: 700; margin-top: 80px;" 

const choiceRock = document.querySelector("rock");

const choicePaper = document.querySelector("paper");

const choiceScissors = document.querySelector("scissors");

choiceRock.addEventListener("click", playround("Rock"));

choicePaper.addEventListener("click", playround("Paper"));

choiceScissors.addEventListener("click", playround("Scissors"));


function getComputerChoice(){
    let N = (Math.floor(Math.random() * 3) + 1);

    switch (N){
        
        case 1:
            return "Rock";
      
        case 2:
            return "Paper";
        
        case 3:
            return "Scissors"
    }
}

function playround(input){
    const C = getComputerChoice();
    message.textContent = "You chose" + input + "and the computer chose" + C + ".";
    if (input === C){
        result.textContent = "It's a draw."
        return;
    }
    else if (input === "Paper"){
        if (C === "Rock"){
            result.textContent = "Congrats! You've won!";
            humanScore += 1;
            return;
        }
        else{
            result.textContent = "You lose...";
            computerScore += 1;
            return;
        }
    }
    else if (input === "Rock"){
        if (C === "Scissors"){
            result.textContent = "Congrats! You've won!";
            humanScore += 1;
            return;
        }
        else{
            console.log("You lose...");
            computerScore += 1;
            return;
        }
    }
    else{
        if (C === "Paper"){
            console.log("Congrats! You've won!");
            humanScore += 1;
            return;
        }
        else{
            console.log("You lose...");
            computerScore += 1;
            return;
        }
    }
}

