'use strict';

// Declare value
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Select the button element
const button = document.querySelector('.check');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(`The secret number is ${secretNumber}.`);

// Listener the value within the range of 1 to 20
document.querySelector('.guess').addEventListener('input', function (event) {
  var value = parseInt(event.target.value);
  if (isNaN(value) || value < 1 || value > 20) {
    event.target.value = '';
  }
});

// Listen check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess ${typeof guess} is ${guess}`);

  // When is not input
  if (!guess) {
    displayMessage('⛔ No number!');
    console.log('⛔ No number!')

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#00cc00';
    document.querySelector('.number').style.width = '30rem';
    console.log('🎉 Correct number!');

    // Disable the button
    button.disabled = true;

    // When score high then highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong (... Optimization code)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#C70039';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = '😵‍💫';
      console.log('💥 You lost the game!')

      // Disable the button
      button.disabled = true;
    }
  }
});

// Listen again button & rest all value
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`The secret number is ${secretNumber}.`);
  displayMessage('🤔 Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Enable the button
  button.disabled = false;
});