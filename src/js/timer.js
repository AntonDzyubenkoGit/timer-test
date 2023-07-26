/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */

import {
  makeSeconds, makeMinutes, makeHours, convertTimeToSec,
} from './makeTime';

const addTimer = document.querySelector('.timer__add');
const cache = new Map();
let newTimer;

class Timer {
  createTimer() {
    const timer = document.createElement('div');
    timer.className = 'timer';
    timer.innerHTML = `
        <p class="timer__time" id="time">00:00:00</p>
        <div class="timer__control">
          <button class="timer__play" type="button" name="play" id="play"></button>
          <button class="timer__pause" type="button" name="pause" id="pause" hidden></button>
          <button class="timer__stop" type="button" name="stop" id="stop"></button>
        </div>
      `;

    addTimer.insertAdjacentElement('beforebegin', timer);
  }

  startTimer(time, timer, seconds) {
    timer.classList.add('timer__active');
    let startSec = seconds;

    newTimer = setInterval(() => {
      const timerSeconds = makeSeconds(startSec);
      const timerMinutes = makeMinutes(startSec);
      const timerHours = makeHours(startSec);

      time.innerHTML = `${timerHours}:${timerMinutes}:${timerSeconds}`;
      startSec += 1;
    }, 10);

    cache.set(timer, newTimer);
  }

  stopTimer(time, timer) {
    timer.classList.remove('timer__active');

    if (cache.has(timer)) {
      clearInterval(cache.get(timer));
      cache.delete(timer);
    }

    time.innerHTML = '00:00:00';
  }

  pauseTimer(time, timer) {
    const pauseSec = time.innerHTML;
    const memorySec = convertTimeToSec(pauseSec);

    if (cache.has(timer)) {
      clearInterval(cache.get(timer));
      cache.delete(timer);
      time.innerHTML = pauseSec;
    } else {
      this.startTimer(time, timer, memorySec);
    }
  }
}

export default Timer;
