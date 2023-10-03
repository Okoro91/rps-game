function getComputerChoice(params) {
    randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0){
        return "Rock";
    }else if (randomNum === 1){
        return "Papper";
    } else {
        return "Scissors";
    }
 }

 console.log(getComputerChoice());

