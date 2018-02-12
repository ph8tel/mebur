window.onload = function() {

    let seconds = 00;
    let minutes = 00;
    const secondsBlock = document.getElementById("seconds")
    const minutesBlock = document.getElementById("minutes")
    const startButton = document.getElementById('button-start');
    const stopButton = document.getElementById('button-stop');
    const totalButton = document.getElementById('button-reset');
    const totalDisplay = document.getElementById('total');

    let Interval;
    const rideTotal = (seconds, mins) => {
        let billTotal, meter;
        if (minutes) {
            meter = minutes === 1 ? "minute" : "minutes"
            billTotal = minutes * .25
            if (billTotal % 1 === .5) {
                billTotal += '0'
            }
            if (billTotal % 1 === 0) {
                billTotal += '.00'
            }
        } else {
            meter = "seconds"
            billTotal = '2 Flat rate'
        }
        const runningTemplate = `
          <h3>Rate: .25$ / minute</h3>
          <h2>Amount Due: $${billTotal}</h2>
        `
        return runningTemplate;
    }
    startButton.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = () => {
        clearInterval(Interval);
    }

    totalButton.onclick = () => {

        clearInterval(Interval);

        let meter = minutes === 1 ? 'minute' : 'minutes';
        const totalTemplate = `
        <h3>Time: ${minutes} ${meter}</h3>
        ${rideTotal(seconds, minutes)}
        `
        totalDisplay.innerHTML = totalTemplate;
        seconds = "00";
        minutes = "00";
        minutesBlock.innerHTML = minutes;
        secondsBlock.innerHTML = seconds;

    }

    const startTimer = () => {
        seconds++;
        if (seconds > 59) {
            minutes++;
            seconds = 00;
            minutesBlock.innerHTML = minutes;
            totalDisplay.innerHTML = rideTotal(seconds, minutes);
        }
        if (seconds < 9) {
            secondsBlock.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            secondsBlock.innerHTML = seconds;
        }
    }

}