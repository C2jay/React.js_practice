const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput==='scissors'){
    return userInput;
  } else {
    console.log('Please choose rock paper or scissors');
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  };
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'It\'s a Tie!';
  };
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer wins this one!';
    }else{
      return 'You win this one!'
    }
  };
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer wins this one!';
    }else{
      return 'You win this one!'
    }
  };
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The computer wins this one!';
    }else{
      return 'You win this one!'
    }
  };
}

const playGame = () => {
  let round = 1;
  while (round <= 3){
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    round++;
  };
    return 'game over!'
  };


console.log(playGame())

