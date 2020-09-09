if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', userChoice)
} else {
  userChoice()
}

function userChoice() {
  var chooseRock = document.getElementsByClassName('userChoosesRock')
  var button = chooseRock[0]
  button.addEventListener('click', () => determineWinner('rock'))

  var choosePaper = document.getElementsByClassName('userChoosesPaper')
  var button = choosePaper[0]
  button.addEventListener('click', () => determineWinner('paper'))

  var chooseScissors = document.getElementsByClassName('userChoosesScissors')
  var button = chooseScissors[0]
  button.addEventListener('click', () => determineWinner('scissors'))

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

function determineWinner(userChoice){
  var computerChoice = getComputerChoice()

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      Loser(userChoice, computerChoice);
    }else{
      Winner(userChoice, computerChoice)
    }
  };
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      Loser(userChoice, computerChoice);
    }else{
      Winner(userChoice, computerChoice)
    }
  };
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      Loser(userChoice, computerChoice);
    }else{
      Winner(userChoice, computerChoice)
    }
  };
  if (userChoice === computerChoice){
    Tie(userChoice, computerChoice);
  };
}

function Winner(userChoice, computerChoice) {
  var winnerRow = document.getElementsByClassName('result-text')[0]
  var winnerText = `
  <div class='result-text'>
    <p> You chose ${userChoice}</p>
    <br/>
    <p> The computer chose ${computerChoice}</p>
    <h3> You win!</h3>
  `
  winnerRow.innerHTML = winnerText
}

function Tie(userChoice, computerChoice) {
  var tieRow = document.getElementsByClassName('result-text')[0]
  var tieText = `
  <div class='result-text'>
    <p> You chose ${userChoice}</p>
    <br/>
    <p> The computer chose ${computerChoice}</p>
    <h3> It's a Tie!</h3>
  `
  tieRow.innerHTML = tieText
}

function Loser(userChoice, computerChoice) {
  var loseRow = document.getElementsByClassName('result-text')[0]
  var loseText = `
  <div class='result-text'>
    <p> You chose ${userChoice}</p>
    <br/>
    <p> The computer chose ${computerChoice}</p>
    <h3> You lose!</h3>
  `
  loseRow.innerHTML = loseText
}


