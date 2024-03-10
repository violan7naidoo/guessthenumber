'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let guessesLeft = 3;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  if (guessesLeft > 0) {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
      displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
      // When player wins
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      // When guess is wrong
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }

    guessesLeft--;

    if (guessesLeft === 0 && guess !== secretNumber) {
      // When the user has no more guesses left
      displayMessage(
        `💥 You lost the game! The correct number was ${secretNumber}. No more guesses left.`
      );
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
    }
  } else {
    // When the user has no more guesses left
    displayMessage(
      `💥 You lost the game! The correct number was ${secretNumber}. No more guesses left.`
    );
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guessesLeft = 3;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
