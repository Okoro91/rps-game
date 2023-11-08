

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0){
        return "rock";
    }else if (randomNum === 1){
        return "paper";
    } else {
        return "scissors";
    }
 }

 

 function playRound(playerSelection, computerSelection) {
    //compare both side to deterrmine the game winner
    if (playerSelection === computerSelection) {
        return "draw"
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "win";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "win";
        //player win section ends here
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "loss";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "loss";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "loss";
    }else {
        return "wrong choice";
    }
 }

 

function choiceUpdate(playerSelection, computerSelection, result){
    const player = document.querySelector('#player');
    player.textContent = `You Chose: ${playerSelection}`

    const computer = document.querySelector('#computer');
    computer.textContent = `Computer choose: ${computerSelection}`

    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = `Round result: ${result}`;
}



let round = 0;
let playerScore = 0;
let computerScore = 0;


function scoreUpdate(){
    const roundPlayed = document.querySelector('#round')
    roundPlayed.textContent = `This is round: ${round}`;
    
    const playerScoreResult = document.querySelector('#playerScore');
    playerScoreResult.textContent = `Player Score: ${playerScore}`;
    
    const computerScoreResult = document.querySelector('#computerScore');
    computerScoreResult.textContent = `Computer Score: ${computerScore}`;
}

function playerButton(playerSelection){
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    choiceUpdate(playerSelection, computerSelection, result)

    if(round < 5){
        if (result === 'win') {
            playerScore++;
          } else if (result === 'loss') {
            computerScore++;
          }
          round++;
          scoreUpdate();
    }else{
        game();
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playerButton('rock')
})

paper.addEventListener('click', () => {
    playerButton('paper');
})

scissors.addEventListener('click', () => {
    playerButton('scissors');
})



function game() {
        const winnerAnnouncement = document.querySelector('#finalWinner');

        if (playerScore > computerScore) {
            winnerAnnouncement.textContent = `You win the Game with ${playerScore} point`;
        }else if (playerScore < computerScore) {
            winnerAnnouncement.textContent = `Computer wins the Game with ${computerScore} point`;
        }else{
            winnerAnnouncement.textContent = "Its a Tie";
        }  
}
  






