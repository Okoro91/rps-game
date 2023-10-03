



function getComputerChoice(params) {
    randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0){
        return "Rock";
    }else if (randomNum === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
 }


 const computerSelection = getComputerChoice().toLowerCase();

 console.log(computerSelection);

 // get game player choice section

 const playerSelection = prompt("choice one: ").toLowerCase();

 console.log(playerSelection);


 function playRound(playerSelection, computerSelection) {
    //compare both side to deterrmine the game winner
    if (playerSelection === computerSelection) {
        return "Draw!!! no winner, try again"
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you win the game! Rock beat Scissors";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "you win the game! Paper beat Rock";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "you win the game! Scissors beat Paper";
        //player winn ssection ends here
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you loss the game! Rock beat Scissors";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "you loss the game! Paper beat Rock";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "you loss the game! Scissors beat Paper";
    }else {
        return "Game Over";
    }
 }

 console.log(playRound(playerSelection, computerSelection));




