'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const secondSection = document.querySelector('.player--1');
const firstSection = document.querySelector('.player--0');
const sections = document.querySelector('.player');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  secondSection.classList.toggle('player--active');
  firstSection.classList.toggle('player--active');
};

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice);

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore = currentScore + randomDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  console.log(scores[activePlayer]);

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--winner`);

    btnRoll.classList.add('noevents');
    btnHold.classList.add('noevents');
  }
  switchPlayer();
});

btnNew.addEventListener('click', function () {
  btnRoll.classList.remove('noevents');
  btnHold.classList.remove('noevents');
  document.querySelector(`.player--0`).classList.remove(`player--winner`);
  document.querySelector(`.player--1`).classList.remove(`player--winner`);
  currentScore = 0;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
  document.getElementById(`score--0`).textContent = currentScore;
  document.getElementById(`score--1`).textContent = currentScore;
});
