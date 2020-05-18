let hoursValue = 0;
let minutesValue = 0;
let secondsValue = 0;

let timerStarter; // Used to start/stop the timer.
let flashDotsStarter; // Used to start/stop the flashing of the dots.

function increaseHours() {
    let hours = document.getElementById("hours");
    // If the value is lower than 10, adds a "0" before it.
    if (hoursValue < 9) {
        hoursValue++;
        hours.innerHTML = "0" + hoursValue;
    }
    // Increases hours value by 1.
    else if (hoursValue < 99) {
        hoursValue++;
        hours.innerHTML = hoursValue;
    }
}

function decreaseHours() {
    let hours = document.getElementById("hours");
    // If the value is lower than 10, adds a "0" before it.
    if (hoursValue <= 10 && hoursValue > 0) {
        hoursValue--;
        hours.innerHTML = "0" + hoursValue;
    }
    // Lowers the value by 1.
    else if (hoursValue != 0) {
        hoursValue--;
        hours.innerHTML = hoursValue;
    }
}

function increaseMinutes() {
    let minutes = document.getElementById("minutes");
    // If the value is lower than 10, adds a "0" before it.
    if (minutesValue < 9) {
        minutesValue++;
        minutes.innerHTML = "0" + minutesValue;
    }
    // Increases minutes value by 1.
    else if (minutesValue < 59) {
        minutesValue++;
        minutes.innerHTML = minutesValue;
    }
    // When they reach 60, reset the minutes and increase hours by 1.
    else {
        minutesValue = 0;
        minutes.innerHTML = "0" + minutesValue;
        increaseHours();
    }
}

function decreaseMinutes() {
    let minutes = document.getElementById("minutes");
    // If the value is lower than 10 adds a "0" before it.
    if (minutesValue <= 10 && minutesValue > 0) {
        minutesValue--;
        minutes.innerHTML = "0" + minutesValue;
    }
    // Lowers the value by 1.
    else if (minutesValue != 0) {
        minutesValue--;
        minutes.innerHTML = minutesValue;
    }
}

function increaseSeconds() {
    let seconds = document.getElementById("seconds");
    // If the value is lower than 10, adds a "0" before it.
    if (secondsValue < 9) {
        secondsValue++;
        seconds.innerHTML = "0" + secondsValue;
    }
    // Increases seconds value by 1.
    else if (secondsValue < 59) {
        secondsValue++;
        seconds.innerHTML = secondsValue;
    }
    // When they reach 60, reset the seconds and increase minutes by 1.
    else {
        secondsValue = 0;
        seconds.innerHTML = "0" + secondsValue;
        increaseMinutes();
    }
}

function decreaseSeconds() {
    let seconds = document.getElementById("seconds");
    // If the value is lower than 10, adds a "0" before it.
    if (secondsValue <= 10 && secondsValue > 0) {
        secondsValue--;
        seconds.innerHTML = "0" + secondsValue;
    }
    // Lowers the value by 1.
    else if (secondsValue != 0) {
        secondsValue--;
        seconds.innerHTML = secondsValue;
    }
}
// Starts the timer, disables buttons that change values.
function startTimer() {
    disableButtons();
    timerStarter = setInterval(timer, 1000);
    flashDotsStarter = setInterval(flashDots, 1000);
    document.getElementById("btn-start").style.display = "none";
    document.getElementById("btn-stop").style.display = "block";
    document.getElementById("btn-pause").style.display = "block";
}
// Clears the timer, enabling value buttons.
function stopTimer() {
    enableButtons();
    clearInterval(timerStarter);
    clearInterval(flashDotsStarter);
    hoursValue = 0;
    minutesValue = 0;
    secondsValue = 0;
    hours.innerHTML = "0" + 0;
    minutes.innerHTML = "0" + 0;
    seconds.innerHTML = "0" + 0;
    document.getElementById("btn-stop").style.display = "none";
    document.getElementById("btn-pause").style.display = "none";
    document.getElementById("btn-start").style.display = "block";
}
// Pauses the timer, allows change of values.
function pauseTimer() {
    enableButtons();
    clearInterval(timerStarter);
    clearInterval(flashDotsStarter);
    document.getElementById("btn-stop").style.display = "block";
    document.getElementById("btn-pause").style.display = "none";
    document.getElementById("btn-start").style.display = "block";
}

function timer() {
        let seconds = document.getElementById("seconds");
        // If the seconds value is between 0 and 10 adds a "0" before it.
        if (secondsValue <= 10 && secondsValue > 0) {
            secondsValue--;
            seconds.innerHTML = "0" + secondsValue;
        }
        // If the value is above 10 lowers it by 1.
        else if (secondsValue != 0) {
            secondsValue--;
            seconds.innerHTML = secondsValue;
        }
        // If the seconds count reaches 0 but there's still time remaining, adjusts the other values and continues the cycle.
        else if(minutesValue != 0) {
            decreaseMinutes();
            secondsValue = 59;
            seconds.innerHTML = secondsValue;
        }
        // If the minutes count hits 0 but there are hours remaining, adjusts the values and continues the cycle.
        else if (minutesValue == 0 && hoursValue != 0) {
            decreaseHours();
            minutesValue = 59;
            minutes.innerHTML = minutesValue;
            secondsValue = 59;
            seconds.innerHTML = secondsValue;
        }
        // If there's no time remaining, stops the timer.
        else {
            stopTimer();
        }
}
// Disables buttons that change the values.
function disableButtons() {
    let hoursUp = document.getElementById("hoursUp");
    hoursUp.removeEventListener("click", increaseHours);

    let hoursDown = document.getElementById("hoursDown");
    hoursDown.removeEventListener("click", decreaseHours);

    let minutesUp = document.getElementById("minutesUp");
    minutesUp.removeEventListener("click", increaseMinutes);

    let minutesDown = document.getElementById("minutesDown");
    minutesDown.removeEventListener("click", decreaseMinutes);

    let secondsUp = document.getElementById("secondsUp");
    secondsUp.removeEventListener("click", increaseSeconds);

    let secondsDown = document.getElementById("secondsDown");
    secondsDown.removeEventListener("click", decreaseSeconds);
}
// Enables the buttons that change the values.
function enableButtons() {
    let hoursUp = document.getElementById("hoursUp");
    hoursUp.addEventListener("click", increaseHours);

    let hoursDown = document.getElementById("hoursDown");
    hoursDown.addEventListener("click", decreaseHours);

    let minutesUp = document.getElementById("minutesUp");
    minutesUp.addEventListener("click", increaseMinutes);

    let minutesDown = document.getElementById("minutesDown");
    minutesDown.addEventListener("click", decreaseMinutes);

    let secondsUp = document.getElementById("secondsUp");
    secondsUp.addEventListener("click", increaseSeconds);

    let secondsDown = document.getElementById("secondsDown");
    secondsDown.addEventListener("click", decreaseSeconds);
}

function hideDots() {
    let dot1 = document.getElementById("firstDot");
    let dot2 = document.getElementById("secondDot")

    dot1.style.opacity = "0";
    dot2.style.opacity = "0";
}

function showDots() {
    let dot1 = document.getElementById("firstDot");
    let dot2 = document.getElementById("secondDot")

    dot1.style.opacity = "100";
    dot2.style.opacity = "100";
}

function flashDots() {
    setTimeout(hideDots, 500);
    setTimeout(showDots, 1000);
}
