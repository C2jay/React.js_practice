function UserChoice() {
  var chooseRock = document.getElementsByClassName('userChoosesRock')
  chooseRock.addEventListener('click', itWorks)

  var choosePaper = document.getElementsByClassName('userChoosesPaper')
  choosePaper.addEventListener('click', determineWinner)

  var chooseScissors = document.getElementsByClassName('userChoosesScissors')
  chooseScissors.addEventListener('click', determineWinner)

  function itWorks() {
    console.log('meh')
  }
}

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


