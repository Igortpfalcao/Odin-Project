console.log("Let's play a funny game of rock paper scissors!");

var humanScore = 0;
var computerScore = 0;

playgame();

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

function getHumanChoice(){
    let N = parseInt(prompt("Choose your move: 1 = rock, 2 = paper, 3 = scissors  (invalid anwers result in the move being chosen at random!)"));
    if (N != 1 && N != 2 && N != 3){
        N = (Math.floor(Math.random() * 3) + 1);
        console.log("Invalid choice! A random move has been selected.");
    } 

    switch (N){
        
        case 1:
            return "Rock";
                 
        case 2:
            return "Paper";
        
        case 3:
            return "Scissors"           
    }
}

function playround(){
    const H = getHumanChoice();
    const C = getComputerChoice();
    console.log("You chose " + H + " and the Computer chose " + C +".");
    if (H === C){
        console.log("It's a draw!")
        return;
    }
    else if (H === "Paper"){
        if (C === "Rock"){
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
    else if (H === "Rock"){
        if (C === "Scissors"){
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

function playgame(){
    playround();
    playround();
    playround();
    playround();
    playround();
    if (humanScore === computerScore){
        console.log("It's a draw! Final score: " + humanScore + " x " + computerScore + "!");
    }
    else if (humanScore >= computerScore){
        console.log("Congrats! you have won! The final score was " + humanScore + " x " + computerScore + "!");
    }
    else{
        console.log("I'm sorry... You lost. Final score: " + humanScore + " x " + computerScore + "!");
    }
}