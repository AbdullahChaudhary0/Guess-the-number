'use strict';
//console.log(document.querySelector('.label-score').textContent);

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let prevHighScore = document.querySelector('.highscore').textContent;
document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered.';
  }
  //Game lost
  else if (score < 1) {
    document.querySelector('.message').textContent = 'Loser';
  }

  //If guess is right
  else if (guess == number) {
    document.querySelector('.message').textContent = 'Yayy, you won.';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#006400';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (prevHighScore < score) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  //If guess is higher than the number
  else if (guess > number) {
    document.querySelector('.message').textContent = 'Too High..';
    score -= 2;
    document.querySelector('.score').textContent = score;
  }
  //If guess is lower than the number
  else if (guess < number) {
    document.querySelector('.message').textContent = 'Too Low..';
    score -= 2;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
