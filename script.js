setInterval(() => {
    let currenTime, hours, minutes, seconds, period, clockTime, clock;
    
    currenTime = new Date();
    hours = currenTime.getHours();
    minutes = currenTime.getMinutes();
    seconds = currenTime.getSeconds();
    period = "AM";

    
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours >= 12) {
        period = "PM";
    }

    clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
    clock = document.getElementById('clock');
    clock.innerText = clockTime;
    console.log(clockTime);
}, 1000);