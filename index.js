var hoursText = document.getElementById('hours-text');
var minutesText = document.getElementById('minutes-text');
var secondsText = document.getElementById('seconds-text');

var minutes = 60;
var seconds = 60;
var hours = 24;

var started = false;

function onClickEvent() {
    minutes = 0;
    seconds = 0;
    hours = 24;
    started = true;
}

function format(number){
    return String(number).padStart(2, '0');
}

setInterval(() => {
    if (started == true) {
        seconds--;
        if (seconds <= 0){
            minutes--;
            seconds = 59;
            if (minutes <= 0){
                hours--;
                minutes = 59;
                if (hours == 0){
                    clearInterval();
                    return;
                }
            }
        }
        hoursText.textContent = format(hours);
        minutesText.textContent = format(minutes);
        secondsText.textContent = format(seconds);
    }
}, 1000)