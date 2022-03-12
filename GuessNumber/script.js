'use strict';
let score = 0;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 20 + 1);
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'You guessed the number!';
    score = score + 10;
    document.querySelector('.score').textContent = `${score}`;
  } else {
    document.querySelector(
      '.message'
    ).textContent = `The number was ${randomNumber}, try again`;
    score = score - 5;
    document.querySelector('.score').textContent = `${score}`;
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  document.querySelector('.again').addEventListener('click', function () {
    const reset = 0;
    document.querySelector('.score').textContent = `${reset}`;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
  });
});
