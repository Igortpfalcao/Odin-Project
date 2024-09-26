console.log("Let's play a funny game of rock paper scissors!");

function getComputerChoice(){
    let N = (math.floor(math.random() * 3) + 1);

    switch (N){
        
        case 1:
            return "Rock";
            break;
        
        case 2:
            return "Paper";
            break;
        
        case 3:
            return "Scissors"
            break;
    }
}

function getHumanChoice(){
    let N = prompt("Choose your move: 1 = rock, 2 = paper, 3 = scissors  (invalid anwers result in the move being chosen at random!)");
    if (N != 1 && N != 2 && N != 3){
        N = (math.floor(math.random() * 3) + 1);
    } 

    switch (N){
        
        case 1:
            return "Rock";
            break;
        
        case 2:
            return "Paper";
            break;
        
        case 3:
            return "Scissors"
            break;
    }
}

function Main(){
    const H = getHumanChoice();
    const C = getComputerChoice();
    console.log("You chose" + H + " and the Computer chose" + C +".");
    if (H === C){
        console.log("It's a draw!")
    }
    if (H === "Paper"){
        
    }

}