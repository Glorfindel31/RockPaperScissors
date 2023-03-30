'useStrict';
const gameMessEl = document.querySelector('#game-message');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const choiceEl = document.querySelectorAll('.btn-container__choises');
const btnPlayEl = document.getElementById('play');
const btnResetEl = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;
let playerChoise;
let computerChoise;

const updateMessage = message => (gameMessEl.textContent = message);

const updateScore = (ps, cs) => {
  playerScoreEl.textContent = `score player: ${ps}`;
  computerScoreEl.textContent = `score Computer: ${cs}`;
};

const getComputerChoise = () => {
  const choice = ['rock', 'paper', 'scissors'];
  return choice[Math.trunc(Math.random() * 3)];
};

const gameLogic = (compChoise, playChoise) => {
  if (compChoise === playChoise) {
    updateMessage(`Player: ${playChoise}, Computer: ${compChoise} || DRAW`);
    playChoise = undefined;
    computerChoise = undefined;
  } else if (compChoise === 'rock' && playChoise === 'paper') {
    updateMessage(
      `Player: ${playChoise}, Computer: ${compChoise} || YOU LOOSE! 😥`
    );
    computerScore++;
  } else if (compChoise === 'paper' && playChoise === 'scissors') {
    updateMessage(
      `Player: ${playChoise}, Computer: ${compChoise} || YOU LOOSE! 😥`
    );
    computerScore++;
  } else if (compChoise === 'scissors' && playChoise === 'rock') {
    updateMessage(
      `Player: ${playChoise}, Computer: ${compChoise} || YOU LOOSE! 😥`
    );
    computerScore++;
  } else {
    updateMessage(
      `Player: ${playChoise}, Computer: ${compChoise} || YOU WIN! 😁`
    );
    playerScore++;
  }
  updateScore(playerScore, computerScore);
};

choiceEl.forEach(btn => {
  btn.addEventListener('click', e => {
    if (e.target.id === 'rock') {
      updateMessage('Player choosed Rock');
      playerChoise = 'rock';
    } else if (e.target.id === 'paper') {
      updateMessage('Player choosed Paper');
      playerChoise = 'paper';
    } else if (e.target.id === 'scissors') {
      updateMessage('Player choosed Scissors');
      playerChoise = 'scissors';
    }
  });
});

btnPlayEl.addEventListener('click', e => {
  if (playerChoise) {
    computerChoise = getComputerChoise();
    console.log(e.target.id);
    gameLogic(computerChoise, playerChoise);
    computerChoise = null;
    playerChoise = null;
  } else updateMessage('Pick Rock Paper or Scissors');
});

btnResetEl.addEventListener('click', e => {
  computerScore = 0;
  playerScore = 0;
  computerChoise = null;
  playerChoise = null;
  updateMessage('Ready to play');
  updateScore(playerScore, computerScore);
});
