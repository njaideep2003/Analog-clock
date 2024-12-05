var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

// Add dial lines to the clock
for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
    var weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),

        // Calculate degrees for each hand
        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6,

        // Select elements
        hEl = document.querySelector('.hour-hand'),
        mEl = document.querySelector('.minute-hand'),
        sEl = document.querySelector('.second-hand'),
        dateEl = document.querySelector('.date'),
        dayEl = document.querySelector('.day'),
        digitalClockEl = document.querySelector('.digital-clock'); // Digital clock element

    // Format day and month
    var day = weekday[d.getDay()];
    if (month < 10) {
        month = "0" + month;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    // Update analog clock hands
    hEl.style.transform = "rotate(" + hDeg + "deg)";
    mEl.style.transform = "rotate(" + mDeg + "deg)";
    sEl.style.transform = "rotate(" + sDeg + "deg)";

    // Update date and day
    dateEl.innerHTML = date + "/" + month + "/" + year;
    dayEl.innerHTML = day;

    // Update digital clock
    if (digitalClockEl) {
        digitalClockEl.innerHTML = h + ":" + m + ":" + s;
    }
}

// Call the clock function every second
setInterval(clock, 1000);
