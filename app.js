// let title = document.querySelector("#title");

// let minute = 0;
// let seconds = 0;
// let hours = 0;

// const interval = setInterval(() => {
//   seconds += 1;
//   title.textConten = `${minute < 10 ? `0${minute}` : minute} : ${
//     seconds < 10 ? `0${seconds}` : seconds
//   }`;
//   if (seconds == 59) {
//     seconds = 0;
//     minute += 1;
//   }
// }, 1000);

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const deadline = "2020-09-05";

  function getRemainingTime(endTime) {
    const total = Date.parse(endTime) - new Date();
    days = Math.floor(total / 1000 / 60 / 60 / 24);
    hours = Math.floor((total / 1000 / 60 / 60) % 24);
    minutes = Math.floor((total / 1000 / 60) % 60);
    seconds = Math.floor((total / 1000) % 60);

    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function addZero(params) {}

  function setClock(endTime) {
    const timer = document.querySelector(".timer"),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");
    updateClock();

    setInterval(updateClock, 1000);
    function updateClock() {
      const total = getRemainingTime(endTime);
      days.innerHTML = total.days;
      hours.innerHTML = total.hours;
      minutes.innerHTML = total.minutes;
      seconds.innerHTML = total.seconds;
    }
  }
  setClock(deadline);
});
