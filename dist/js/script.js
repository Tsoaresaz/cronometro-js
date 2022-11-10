let hour = 0;
let minu = 0;
let seco = 0;
let start_btn = false;
let pause_btn = false;
let stop_btn = false;
let interval;

const timer = document.querySelector('#js-time');

const start = () => {
    const startEl = document.querySelector('#js-start');
    startEl.addEventListener('click', (e) => {
        e.preventDefault();
        
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
        }, 1000)
    });
}
start();

const pause = () => {
    const pauseEl = document.querySelector('#js-pause');
    pauseEl.addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(interval);
    });
}
pause();

const stop = () => {
    const stopEl = document.querySelector('#js-stop');
    stopEl.addEventListener('click', (e) => {
        e.preventDefault();

        resetTime();
        clearInterval(interval);
    });
}
stop();

const resetTime = () => {
    hour = 0;
    minu = 0;
    seco = 0;
    setTime(hour, minu, seco);
}

const defineTime = (time) => {
    if (time < 10) {
        return `0${time}`;
    }
    return time;
}

const setTime = (hour, minu, seco, mili) => {
    return timer.innerHTML = `${defineTime(hour)}:${defineTime(minu)}:${defineTime(seco)}`;
}