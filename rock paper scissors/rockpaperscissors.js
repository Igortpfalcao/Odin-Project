var humanScore = 0;
var computerScore = 0;

const message = document.querySelector("#message");

const result = document.querySelector("#result")

result.style.cssText = "display: flex; justify-content: center; font-size: 18px; font-weight: 700; margin-top: 80px;"; 

const scoreComputer = document.querySelector("#scoreComputer")

const scoreHuman = document.querySelector("#scoreHuman")

const choiceRock = document.querySelector("#rock");

const choicePaper = document.querySelector("#paper");

const choiceScissors = document.querySelector("#scissors");


choiceRock.addEventListener("click", () => playround("Rock"));

choicePaper.addEventListener("click", () => playround("Paper"));

choiceScissors.addEventListener("click", () => playround("Scissors"));





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
    message.textContent = "You chose " + input + " and the computer chose " + C + ".";
    if (input === C){
        result.textContent = "It's a draw."
        return;
    }
    else if (input === "Paper"){
        if (C === "Rock"){
            result.textContent = "Congrats! You've won!";
            humanScore += 1;
            attScore("H");
            return;
        }
        else{
            result.textContent = "You lose...";
            computerScore += 1;
            attScore("C");
            return;
        }
    }
    else if (input === "Rock"){
        if (C === "Scissors"){
            result.textContent = "Congrats! You've won!";
            humanScore += 1;
            attScore("H");
            return;
        }
        else{
            result.textContent = "You lose...";
            computerScore += 1;
            attScore("C");
            return;
        }
    }
    else{
        if (C === "Paper"){
            result.textContent = "Congrats! You've won!";
            humanScore += 1;
            attScore("H");
            return;
        }
        else{
            result.textContent = "You lose...";
            computerScore += 1;
            attScore("C");
            return;
        }
    }
}

function attScore(winner){
    if (winner === "C"){
        scoreComputer.textContent = parseInt(computerScore);
        if (computerScore === 5){
            message.textContent = "Computer won with a final score of: " + humanScore + "x" + computerScore + ".";
            result.textContent = "Press \"play again\" to go for another game of RPS!";
            const playAgain = document.createElement("button");
            playAgain.textContent = "PLAY AGAIN";
            playAgain.style.cssText = "text.align: center; padding: 8px 16px;";
            playAgain.addEventListener("click", () => restartGame())
            result.appendChild(playAgain);

        }
    }
    
    else{
        scoreHuman.textContent = parseInt(humanScore);
        if (humanScore === 5){
            message.textContent = "You won with a final score of: " + humanScore + "x" + computerScore + ".";
            result.textContent = "Press \"play again\" to go for another game of RPS!";
            const playAgain = document.createElement("button");
            playAgain.textContent = "PLAY AGAIN";
            playAgain.style.cssText = "text.align: center; padding: 8px 16px; margin-left: 30px;";
            playAgain.addEventListener("click", () => restartGame());
            result.appendChild(playAgain);

           
        }
    }
}

function restartGame(){
    message.textContent = "Waiting for input...";
    humanScore = 0;
    computerScore = 0;    
    scoreComputer.textContent = "";
    scoreHuman.textContent = "";
    result.textContent = "";
    result.querySelector("button")?.remove();
    


}