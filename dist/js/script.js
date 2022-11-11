let hour = 0;
let minu = 0;
let seco = 0;
let start_btn = false;
let pause_btn = false;
let stop_btn = false;
let interval;

const timer = document.querySelector("#js-time");
const startEl = document.querySelector("#js-start");
const pauseEl = document.querySelector("#js-pause");
const stopEl = document.querySelector("#js-stop");

const addClass = (element, className) => {
  element.classList.add(className);
};

const removeClass = (element, className) => {
  element.classList.remove(className);
};

addClass(pauseEl, "is-disabled");
addClass(stopEl, "is-disabled");

const start = () => {
  startEl.addEventListener("click", (e) => {
    e.preventDefault();

    if (!start_btn) {
      interval = setInterval(() => {
        seco++;
        setTime(hour, minu, seco);
        if (seco == 60) {
          seco = 0;
          minu++;
          setTime(hour, minu, seco);
        }
        if (minu == 60) {
          minu = 0;
          hour++;
          setTime(hour, minu, seco);
        }
      }, 1000);

      start_btn = true;
      addClass(startEl, "is-disabled");
      removeClass(pauseEl, "is-disabled");
      removeClass(stopEl, "is-disabled");
    }
  });
};
start();

const pause = () => {
  pauseEl.addEventListener("click", (e) => {
    e.preventDefault();

    if (start_btn) {
      clearInterval(interval);
      removeClass(startEl, "is-disabled");
      start_btn = false;
      pause_btn = true;
    }
  });
};
pause();

const stop = () => {
  stopEl.addEventListener("click", (e) => {
    e.preventDefault();

    if (!start_btn && pause_btn) {
      resetTime();
      clearInterval(interval);
      removeClass(startEl, "is-disabled");
      addClass(pauseEl, "is-disabled");
      addClass(stopEl, "is-disabled");
      start_btn = false;
    }
  });
};
stop();

const resetTime = () => {
  hour = 0;
  minu = 0;
  seco = 0;
  setTime(hour, minu, seco);
};

const defineTime = (time) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

const setTime = (hour, minu, seco) => {
  return (timer.innerHTML = `${defineTime(hour)}:${defineTime(
    minu
  )}:${defineTime(seco)}`);
};
