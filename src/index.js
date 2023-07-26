import Timer from './js/timer';
import './style.scss';

const timer = new Timer();
const timerContainer = document.getElementById('timer-container');
const plus = document.getElementById('plus');
const second = 0;

plus.addEventListener('click', timer.createTimer);

timerContainer.addEventListener('click', (event) => {
  const currentTimer = event.target.closest('.timer');

  const currentPlay = currentTimer.querySelector('#play');
  const currentPause = currentTimer.querySelector('#pause');
  const currentTime = currentTimer.querySelector('#time');

  if (event.target.id === 'play') {
    timer.startTimer(currentTime, currentTimer, second);
    currentPlay.hidden = true;
    currentPause.hidden = false;
  } else if (event.target.id === 'stop') {
    timer.stopTimer(currentTime, currentTimer);
    currentPlay.hidden = false;
    currentPause.hidden = true;
  } else if (event.target.id === 'pause') {
    timer.pauseTimer(currentTime, currentTimer);
  }
});
