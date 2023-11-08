

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

 

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(`Computer choose: ${computerSelection}`);
    console.log(`you choose: ${playerSelection}`);
    console.log(`the result is: ${result}`);
})

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(`Computer choose: ${computerSelection}`);
    console.log(`you choose: ${playerSelection}`);
    console.log(`the result is: ${result}`);
})

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(`Computer choose: ${computerSelection}`);
    console.log(`you choose: ${playerSelection}`);
    console.log(`the result is: ${result}`);
})







/*

let playerScore = 0;
let computerScore = 0;
let round = 0; 


function game() {
  const computerSelection = getComputerChoice().toLocaleLowerCase();
  console.log(`Computer choose: ${computerSelection}`);
  const playerSelection = prompt("Make your wise choice: ").toLocaleLowerCase();
  console.log(`You choose: ${playerSelection}`);

  const result = playRound(playerSelection, computerSelection);

  console.log(`Round ${round + 1} result is: ${result}`);

  if (round < 5){
    if (result === "win"){
      playerScore++;
      console.log(`your win your score is: ${playerScore}`);
    }else if(result == "loss"){
      computerScore++;
      console.log(`You loss, computer score: ${computerScore}`);
    }

    round++;
    game();
    
  }else {
    if (playerScore > computerScore){
      console.log(`Your total score is ${playerScore} and computer total score is ${computerScore} : you WIN!!!`);
    }else if (computerScore > playerScore){
      console.log(`Your total score is ${playerScore} and computer total score is ${computerScore} : you LOSS!`);
    }else{
      console.log(`Your total score is ${playerScore} and computer total score is ${computerScore} : it is a TIE!`);
    }
  }
}


game();
*/




