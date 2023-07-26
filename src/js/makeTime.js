/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

function makeSeconds(seconds) {
  return Math.floor(seconds % 60) < 10 ? `0${Math.floor(seconds % 60)}` : Math.floor(seconds % 60);
}

function makeMinutes(seconds) {
  return Math.floor((seconds / 60) % 60) < 10 ? `0${Math.floor((seconds / 60) % 60)}` : Math.floor((seconds / 60) % 60);
}

function makeHours(seconds) {
  return Math.floor((seconds / 3600) % 60) < 10 ? `0${Math.floor((seconds / 3600) % 60)}` : Math.floor((seconds / 3600) % 60);
}

function convertTimeToSec(timeForConnvert) {
  return timeForConnvert.split(':').map((item, index) => {
    if (index === 0) {
      return +item * 3600;
    } if (index === 1) {
      return +item * 60;
    }
    return +item;
  }).reduce((sum, item) => sum += item, 0);
}

export {
  makeSeconds, makeMinutes, makeHours, convertTimeToSec,
};
