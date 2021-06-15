'use strict';
let number = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input').value);

  if (!guess) {
    document.querySelector('.para').textContent = 'No Number ⛔';
  } else if (guess === number) {
    document.querySelector('.para').textContent = '🎉 Correct Number';
    document.querySelector('.box').textContent = number;
    document.querySelector('.box').style.width = '14rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score >= highscore) {
      highscore = score;
      document.querySelector(
        '.highscore'
      ).textContent = `🥈 highscore : ${highscore}`;
    }
  } else if (score === 1) {
    document.querySelector('.para').textContent = 'Game Over';
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (guess > 20) {
    document.querySelector('.para').textContent =
      '❌Number Should Be b/w 1 & 20';
    document.querySelector('.para').style.backgroundColor = 'red';
  } else if (guess < number) {
    document.querySelector('.para').textContent = '📉Too Low';
    score--;
    document.querySelector('.score').textContent = `💯 score :${score}`;
  } else if (guess > number) {
    document.querySelector('.para').textContent = '📈Too High';
    score--;
    document.querySelector('.score').textContent = `💯 score :${score}`;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = `💯 score :${score}`;
  document.querySelector('.para').textContent = '🤔start guessing...';
  document.querySelector('body').style.backgroundColor = '#242424';
  document.querySelector('.box').style.width = '10rem';
  document.querySelector('.box').textContent = '?';
  document.querySelector('.input').value = '';
});
