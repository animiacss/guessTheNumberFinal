'use strict';
let score = 20;
let highScore = 0;
const randomNum = Math.trunc(Math.random() * 20) + 1;
console.log(randomNum);
document.addEventListener('DOMContentLoaded', function () {
  const storedHighScore = sessionStorage.getItem('highScore');
  if (storedHighScore) {
    highScore = parseInt(storedHighScore);
    document.querySelector('.highscore').textContent = highScore;
  }
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'im sorry, not a number womp womp';
  } else {
    if (score > 0) {
      if (guess === randomNum) {
        document.querySelector('.message').textContent = 'you won';
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('.score').textContent = score;
        //style of number
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        // When updating highScore in your game logic:
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
          sessionStorage.setItem('highScore', highScore); // Store highScore in localStorage
        }
      } else if (guess > randomNum) {
        document.querySelector('.message').textContent = 'Too high broh';
        --score;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Too low, dumbass';
        --score;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'you lost womp womp';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
